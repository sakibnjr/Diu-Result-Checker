import diuLogo from "/src/assets/diu.png";
import useFetch from "./useFetch";
import ResultTable from "./ResultTable";
import StudentInfoTable from "./StudentInfoTable";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ResultPage = ({ studentID, setStudentID }) => {
  const {
    data: sinfo,
    isPending,
    bugs,
  } = useFetch(
    "http://software.diu.edu.bd:8006/result/studentInfo?studentId=" + studentID
  );

  const {
    data: result,
    isLoading,
    error,
  } = useFetch(
    "http://software.diu.edu.bd:8006/result?grecaptcha=&semesterId=241&studentId=" +
      studentID
  );

  let cgpaGrade =
    result && result.length > 0
      ? Math.max(...result.map((item) => item.cgpa))
      : "---";

  const [gradeLetter, setGradeLetter] = useState("...");

  function calculateGrade(point) {
    if (point >= 4.0) {
      setGradeLetter("A+");
    } else if (point >= 3.75) {
      setGradeLetter("A");
    } else if (point >= 3.5) {
      setGradeLetter("A-");
    } else if (point >= 3.25) {
      setGradeLetter("B+");
    } else if (point >= 3.0) {
      setGradeLetter("B");
    } else if (point >= 2.75) {
      setGradeLetter("B-");
    } else if (point >= 2.5) {
      setGradeLetter("C+");
    } else if (point >= 2.25) {
      setGradeLetter("C");
    } else if (point >= 2.0) {
      setGradeLetter("D");
    } else {
      setGradeLetter("F");
    }
  }

  useEffect(() => {
    calculateGrade(cgpaGrade);
  }, [cgpaGrade]);

  const navigate = useNavigate();

  return (
    <div className="border-2 m-4">
      <div className="m-4" id="print">
        {/* result card header */}
        <div className="flex justify-around items-center mb-10">
          <img src={diuLogo} alt="diuLogo" className="h-4 md:h-10 w-30" />
          <h1 className="md:text-4xl">Academic Result</h1>
          <p className="text-2xl md:text-4xl rotate-16 text-rose-600">
            {gradeLetter}
          </p>
        </div>
        {/* student information */}
        <div className="mb-10">
          {isPending && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}
          {/* {bugs && <p>{bugs}</p>} */}
          {sinfo && <StudentInfoTable sinfo={sinfo} />}
        </div>
        {/* Result information */}
        <div className="overflow-x-auto">
          {isLoading && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}
          {/* {error && <p>{error}</p>} */}
          {result && <ResultTable result={result} />}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-evenly mb-2 mx-4">
        <button className="btn btn-primary">Save PDF</button>
        <button className="btn btn-warning ">Compare Result</button>
        <button
          className="btn btn-outline"
          onClick={() => {
            navigate("/");
            setStudentID("");
          }}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
