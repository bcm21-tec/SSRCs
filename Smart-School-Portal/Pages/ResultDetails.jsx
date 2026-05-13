import { useParams } from "react-router-dom";
import students from "../Data/Student";

function ResultDetails() {
  const { id } = useParams();

  // Find student using id
  const student = students.find((student) => student.id === Number(id));

  // If student does not exist
  if (!student) {
    return <h1>Student Not Found</h1>;
  }

  // Calculate total score
  const total = student.subjects.reduce(
    (sum, subject) => sum + subject.score,
    0,
  );

  // Calculate average
  const average = total / student.subjects.length;

  // Grade Function
  const getGrade = (score) => {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  };

  // Remark
  const remark = average >= 50 ? "Excellent Performance" : "Needs Improvement";

  return (
    <div className="resultDiv">
      <h1 className="resulttxt">Result Details</h1>

      <h2 className="resultnam">{student.name}</h2>

      <p className="class">
        <strong>Class:</strong> {student.class}
      </p>

      <hr />

      <h3 className="subsco">Subjects & Scores</h3>

      {student.subjects.map((subject, index) => (
        <div key={index} className="resultgrid">
          <p>
            <strong>Subject:</strong> {subject.name}
          </p>

          <p>
            <strong>Score:</strong> {subject.score}
          </p>

          <p className="grade">
            <strong>Grade:</strong> {getGrade(subject.score)}
          </p>
        </div>
      ))}

      <hr />
      <div className="totdiv">
        <h3>Total Score: {total}</h3>

        <h3>Average Score: {average.toFixed(2)}</h3>

        <h3>
          Status:{" "}
          {average >= 50 ? (
            <span className="passspan">Pass</span>
          ) : (
            <span className="failspan">Fail</span>
          )}
        </h3>

        <h3>Remark: {remark}</h3>
      </div>
    </div>
  );
}

export default ResultDetails;
