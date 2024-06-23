import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = ({ studentID, setStudentID, semesterID, setSemesterID }) => {
  function checkResult(e) {
    e.preventDefault();
    setStudentID(studentID);
    setSemesterID(semesterID);
    navigate("/result");
  }
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="text-center mb-4">
        <h1 className="text-3xl text-primary">Diu Result Checker</h1>
        <p className="">Version 2.1</p>
      </div>

      <div>
        <form
          action=""
          onSubmit={checkResult}
          className="form-control border-2 p-4  rounded-lg shadow-md"
        >
          <label htmlFor="" className="label">
            Student ID:
          </label>
          <input
            type="text"
            placeholder="XXX-XX-XXXX"
            className="input hover:border-primary input-bordered w-full max-w-xs"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
          />
          <label htmlFor="" className="label">
            Semester ID:
          </label>
          <input
            type="text"
            disabled
            placeholder="241"
            className="input hover:border-primary input-bordered w-full max-w-xs"
            value={semesterID}
            onChange={(e) => setSemesterID(e.target.value)}
          />{" "}
          <br />
          <button className="btn btn-primary w-full max-w-xs btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Check Result
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
