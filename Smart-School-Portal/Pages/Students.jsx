import { useEffect, useState } from "react";
import studentsData from "../Data/Student";
import StudentCard from "../Component/StudentCard";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");

  // useEffect to load data
  useEffect(() => {
    setStudents(studentsData);
  }, []);

  // Filter students
  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesClass =
      selectedClass === "All" || student.class === selectedClass;

    return matchesSearch && matchesClass;
  });

  return (
    <div className="stdLis">
      <div className="background">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
      </div>
      <h1 className="stdlst">Students List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input"
      />

      {/* Filter Dropdown */}
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        style={{ padding: "13px" }}
      >
        <option value="All">All Classes</option>
        <option value="SS1">SS1</option>
        <option value="SS2">SS2</option>
        <option value="SS3">SS3</option>
      </select>

      {/* Student Cards */}
      <div className="stdCad">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;
