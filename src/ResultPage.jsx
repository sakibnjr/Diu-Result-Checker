import React from "react";
import diuLogo from "/src/assets/diu.png";
import useFetch from "./useFetch";
import ResultTable from "./ResultTable";
import StudentInfoTable from "./StudentInfoTable";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

  const navigate = useNavigate();

  const handleSavePDF = () => {
    const input = document.getElementById("print");
    if (!input) {
      console.error("Element with id 'print' not found");
      return;
    }
    console.log("Starting PDF generation");

    html2canvas(input)
      .then((canvas) => {
        console.log("Canvas created");
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("result.pdf");
        console.log("PDF saved");
      })
      .catch((error) => {
        console.error("Error generating PDF", error);
      });
  };

  return (
    <div className="border-2 m-4" id="print">
      <div className="m-4">
        {/* result card header */}
        <div className="flex justify-between items-center mb-10">
          <img src={diuLogo} alt="diuLogo" className="h-4 md:h-10 w-30" />
          <h1 className="md:text-3xl">Academic Result</h1>
          <p className="text-2xl md:text-4xl rotate-16 text-rose-600">A+</p>
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
      <div className="flex justify-evenly mb-2">
        <button className="btn btn-primary" onClick={handleSavePDF}>
          Save PDF
        </button>
        <button className="btn btn-warning">Compare Result</button>
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
