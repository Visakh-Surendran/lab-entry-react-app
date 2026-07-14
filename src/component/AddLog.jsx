import axios from "axios";
import React, { useState } from "react";

const AddLog = () => {
  const [input, changeInput] = useState({
    name: "",
    department: "",
    semester: "",
    course: "",
    systemNo: "",
    loginTime: "",
    logoutTime: "",
    date: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("http://localhost:3000/add-Lab ", input)
      .then((response) => {
        console.log(response.data);
        alert("Log added successfully");
      })
      .catch((error) => {
        console.error("Error adding log:", error);
        alert("Failed to add Log");
      });
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow p-4">
              <h3 className="text-center mb-4">Lab Log Entry</h3>

              {/* Student Name */}
              <div className="mb-3">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                  required
                />
              </div>

              {/* Department */}
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  name="department"
                  value={input.department}
                  onChange={inputHandler}
                  required
                >
                  <option value="">-- Select Department --</option>
                  <option value="MCA">MCA</option>
                  <option value="CSE">Computer Science & Engineering</option>
                  <option value="ECE">Electronics & Communication</option>
                  <option value="EEE">Electrical & Electronics</option>
                </select>
              </div>

              {/* Semester */}
              <div className="mb-3">
                <label className="form-label">Semester</label>
                <select
                  className="form-select"
                  name="semester"
                  value={input.semester}
                  onChange={inputHandler}
                  required
                >
                  <option value="">-- Select Semester --</option>
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>
                  <option value="Semester 3">Semester 3</option>
                  <option value="Semester 4">Semester 4</option>
                </select>
              </div>

              {/* Course */}
              <div className="mb-3">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  name="course"
                  value={input.course}
                  onChange={inputHandler}
                  required
                >
                  <option value="">-- Select Course --</option>
                  <option value="Python Programming">
                    Python Programming
                  </option>
                  <option value="Java Programming">
                    Java Programming
                  </option>
                  <option value="Data Structures">
                    Data Structures
                  </option>
                  <option value="Database Management System">
                    Database Management System
                  </option>
                </select>
              </div>

              {/* System Number */}
              <div className="mb-3">
                <label className="form-label">System Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="systemNo"
                  value={input.systemNo}
                  onChange={inputHandler}
                  required
                />
              </div>

              {/* Login Time */}
              <div className="mb-3">
                <label className="form-label">Login Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="loginTime"
                  value={input.loginTime}
                  onChange={inputHandler}
                  required
                />
              </div>

              {/* Logout Time */}
              <div className="mb-3">
                <label className="form-label">Logout Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logoutTime"
                  value={input.logoutTime}
                  onChange={inputHandler}
                  required
                />
              </div>

              {/* Date */}
              <div className="mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={input.date}
                  onChange={inputHandler}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button className="btn btn-warning" onClick={readValue}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;