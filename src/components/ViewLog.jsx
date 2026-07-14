import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

const ViewLog = () => {
  const [logs, setLogs] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view-Lab")
      .then((response) => {
        setLogs(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch logs");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
        <NavigationBar/>
      <h3 className="text-center mb-4">View Lab Logs</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Course</th>
              <th>System No</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.department}</td>
                <td>{value.semester}</td>
                <td>{value.course}</td>
                <td>{value.systemNo}</td>
                <td>{value.loginTime}</td>
                <td>{value.logoutTime}</td>
                <td>{value.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLog;