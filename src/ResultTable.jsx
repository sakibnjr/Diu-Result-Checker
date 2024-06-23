const ResultTable = ({ result }) => {
  return (
    <div>
      <p className="w-auto bg-info text-white mx-2 text-center rounded-md mb-4">
        SGPA:{" "}
        {result.length > 0
          ? Math.max(...result.map((item) => item.cgpa))
          : "---"}
      </p>
      <table className="table table-xs md:table-md lg:table-lg">
        <thead>
          <tr className="border-2 rounded-md">
            <th className="uppercase text-info">Course Title</th>
            <th className="uppercase text-info">Grade Point</th>
            <th className="uppercase text-info">Grade Letter</th>
            <th className="uppercase text-info">Credit</th>
          </tr>
        </thead>
        {result.map((item, index) => (
          <tbody key={index}>
            <tr className="border-2 rounded-md">
              <td>{item.courseTitle}</td>
              <td>{item.pointEquivalent}</td>
              <td>{item.gradeLetter}</td>
              <td>{item.totalCredit}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ResultTable;
