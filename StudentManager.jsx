import React, { useState, useEffect } from "react";
import "./StudentManager.css";

export default function StudentManager() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    regno: "",
    name: "",
    dob: "",
    age: "",
    gender: "",
    father: "",
    standard: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/StudentManagement")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // ✅ Handle input change + live validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    let newErrors = { ...errors };

    if (name === "name") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        newErrors.name = "Name must contain only letters.";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "father") {
      if (value && !/^[A-Za-z\s]*$/.test(value)) {
        newErrors.father = "Father's Name must contain only letters.";
      } else {
        delete newErrors.father;
      }
    }

    if (name === "age") {
      if (!/^\d*$/.test(value)) {
        newErrors.age = "Age must contain only numbers.";
      } else if (value !== "" && Number(value) <= 0) {
        newErrors.age = "Age must be a positive number.";
      } else {
        delete newErrors.age;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name must contain only letters.";
    }

    if (form.father && !/^[A-Za-z\s]+$/.test(form.father)) {
      newErrors.father = "Father's Name must contain only letters.";
    }

    if (!/^\d+$/.test(form.age)) {
      newErrors.age = "Age must contain only numbers.";
    } else if (Number(form.age) <= 0) {
      newErrors.age = "Age must be a positive number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Add new student
  const handleAdd = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isEditing) {
      // 🔹 Update student
      fetch(`http://localhost:5000/StudentManagement/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedStudent) => {
          setStudents(students.map((s) => (s.id === editId ? updatedStudent : s)));
          resetForm();
        });
    } else {
      // 🔹 Add new student
      fetch("http://localhost:5000/StudentManagement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newStudent) => {
          setStudents([...students, newStudent]);
          resetForm();
        });
    }
  };

  // ✅ Delete student
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/StudentManagement/${id}`, {
      method: "DELETE",
    }).then(() => {
      setStudents(students.filter((s) => s.id !== id));
    });
  };

  // ✅ Open edit modal
  const handleEdit = (student) => {
    setForm(student);
    setIsEditing(true);
    setEditId(student.id);
    setIsModalOpen(true);
  };

  // ✅ Reset form & modal state
  const resetForm = () => {
    setForm({
      regno: "",
      name: "",
      dob: "",
      age: "",
      gender: "",
      father: "",
      standard: ""
    });
    setIsModalOpen(false);
    setIsEditing(false);
    setEditId(null);
    setErrors({});
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Container">
      <h1>Student Management</h1>

      <div className="top-bar">
        <input
          type="text"
          placeholder="🔍 Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="create-btn" onClick={() => setIsModalOpen(true)}>
          + Create Student Details
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Father</th>
            <th>Standard</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr><td colSpan="8" className="no-data">No students found</td></tr>
          ) : (
            filteredStudents.map((s, index) => (
              <tr key={s.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{s.regno}</td>
                <td>{s.name}</td>
                <td>{new Date(s.dob).toLocaleDateString("en-GB").replace(/\//g, "-")}</td>
                <td>{s.age}</td>
                <td>{s.gender}</td>
                <td>{s.father}</td>
                <td>{s.standard}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(s)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>{isEditing ? "Edit Student" : "Create Student"}</h2>
            <form onSubmit={handleAdd} className="modal-form">
              <input name="regno" value={form.regno} onChange={handleChange} placeholder="Reg No" required />

              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
              {errors.name && <p className="error">{errors.name}</p>}

              <input name="dob" type="date" value={form.dob} onChange={handleChange} required />

              <input name="age" type="text" value={form.age} onChange={handleChange} placeholder="Age" required />
              {errors.age && <p className="error">{errors.age}</p>}

              <select name="gender" value={form.gender} onChange={handleChange} required>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input name="father" value={form.father} onChange={handleChange} placeholder="Father's Name" />
              {errors.father && <p className="error">{errors.father}</p>}

              <select name="standard" value={form.standard} onChange={handleChange} required>
                <option value="">Select Standard</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>

              <div className="modal-actions">
                <button type="submit" className="add-btn">
                  {isEditing ? "Update Student" : "Add Student"}
                </button>
                <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
