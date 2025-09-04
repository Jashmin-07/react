import React, { useEffect } from "react";
function StudentData() {
  const [students, setStudents] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
    .then((response) => response.json())
    .then((data) => setStudents(data));
  }, []);
  return (
    <div>
     <table>
       <thead>
         <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Age</th>
           <th>Grade</th>
         </tr>
       </thead>
       <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
       </tbody>
     </table>
    </div>
  );
}
 export default StudentData;