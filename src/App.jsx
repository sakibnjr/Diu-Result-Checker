import Home from "./Home";
import ResultPage from "./ResultPage";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const [studentID, setStudentID] = useState("");
  const [semesterID, setSemesterID] = useState("");
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                studentID={studentID}
                setStudentID={setStudentID}
                semesterID={semesterID}
                setSemesterID={setSemesterID}
              />
            }
          ></Route>
          <Route
            path="/result"
            element={
              <ResultPage studentID={studentID} setStudentID={setStudentID} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
