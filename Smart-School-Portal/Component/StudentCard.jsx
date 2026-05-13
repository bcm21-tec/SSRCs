import { Link } from "react-router-dom";

function StudentCard({ student }) {
  // calculate average
  const total = student.subjects.reduce(
    (sum, subject) => sum + subject.score,
    0,
  );

  const average = total / student.subjects.length;

  return (
    <div className="stuLis">
      <h2 className="stdnam">{student.name}</h2>
      <p className="stdcls">Class: {student.class}</p>
      <p className="stdavg">Average Score: {average.toFixed(2)}</p>
      {/* TERNARY OPERATOR */}
      <p>
        Status:{" "}
        {average >= 50 ? (
          <span className="passspan">PASS</span>
        ) : (
          <span className="failspan">FAIL</span>
        )}
      </p>
      <Link to={`/result/${student.id}`}>
        <button className="stdbtn">View Result</button>
      </Link>
    </div>
  );
}

export default StudentCard;
