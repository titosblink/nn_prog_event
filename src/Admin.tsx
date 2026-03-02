import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";

function Admin() {
  const API = "https://nnweek-backend-e1b1368615cb.herokuapp.com/api";
  const token = localStorage.getItem("token");

  const [daynumber, setDayNumber] = useState("");
  const [daydate, setDayDate] = useState("");
  const [daycode, setDayCode] = useState("");

  const [progDayCode, setProgDayCode] = useState("");
  const [progtime, setProgTime] = useState("");
  const [title, setTitle] = useState("");

  // LOGOUT FUNCTION
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  // ADD DAY
  const addDay = async () => {
    if (!token) return logout(); // redirect if no token
    try {
      await axios.post(
        `${API}/days`,
        {
          daynumber: Number(daynumber),
          daydate,
          daycode: Number(daycode),
        },
        { headers: { Authorization: token } },
      );

      alert("Day added successfully!");
      setDayNumber("");
      setDayDate("");
      setDayCode("");
    } catch (err) {
      alert("Error adding day");
      console.error(err);
    }
  };

  // ADD PROGRAMME
  const addProgramme = async () => {
    if (!token) return logout(); // redirect if no token
    try {
      await axios.post(
        `${API}/programmes`,
        {
          daycode: Number(progDayCode),
          progtime,
          title,
        },
        { headers: { Authorization: token } },
      );

      alert("Programme added!");
      setProgDayCode("");
      setProgTime("");
      setTitle("");
    } catch (err) {
      alert("Error adding programme");
      console.error(err);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2>Admin Panel</h2>
        <button className="admin-btn" onClick={logout}>
          Logout
        </button>
        <hr />

        {/* ADD DAY */}
        <h4>Add Day</h4>
        <input
          className="admin-input"
          placeholder="Day Number"
          value={daynumber}
          onChange={(e) => setDayNumber(e.target.value)}
        />
        <br />
        <br />
        <input
          className="admin-input"
          placeholder="Day Date"
          value={daydate}
          onChange={(e) => setDayDate(e.target.value)}
        />
        <br />
        <br />
        <input
          className="admin-input"
          placeholder="Day Code"
          value={daycode}
          onChange={(e) => setDayCode(e.target.value)}
        />
        <br />
        <br />
        <button className="admin-btn" onClick={addDay}>
          Add Day
        </button>

        <hr />

        {/* ADD PROGRAMME */}
        <h4>Add Programme</h4>
        <input
          className="admin-input"
          placeholder="Day Code"
          value={progDayCode}
          onChange={(e) => setProgDayCode(e.target.value)}
        />
        <br />
        <br />
        <input
          className="admin-input"
          placeholder="Programme Time"
          value={progtime}
          onChange={(e) => setProgTime(e.target.value)}
        />
        <br />
        <br />
        <input
          className="admin-input"
          placeholder="Programme Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <button className="admin-btn" onClick={addProgramme}>
          Add Programme
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Admin;
