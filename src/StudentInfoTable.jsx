const StudentInfoTable = ({ sinfo }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <p className="text-xs md:text-sm lg:text-lg font-bold border-2 rounded-md px-4">
          Student Name:
          <span className="mx-2 font-normal">{sinfo.studentName}</span>
        </p>
        <p className="text-xs md:text-sm lg:text-lg font-bold border-2 rounded-md px-4">
          Student ID:{" "}
          <span className="mx-2  font-normal">{sinfo.studentId}</span>
        </p>
        <p className="text-xs md:text-sm lg:text-lg font-bold border-2 rounded-md px-4">
          Department:
          <span className="mx-2 font-normal">{sinfo.departmentName}</span>
        </p>
        <p className="text-xs md:text-sm lg:text-lg font-bold border-2 rounded-md px-4">
          Batch No: <span className="mx-2 font-normal">{sinfo.batchNo}</span>
        </p>
      </div>
    </div>
  );
};

export default StudentInfoTable;
