import "./styling.css";

const Table = ({ sat }) => {
  const tableHeadings = ["Name","Type of Satellite","Launch Date","Status"];
  return (
      <table>
       <thead>
        <tr>
          {tableHeadings.map((heading, index) => (<th key={index}>{heading}</th>))}
          {/* <th>Header TBD</th> */}
        </tr>
        </thead>
        <tbody>
          {
            sat.map((data, id) => (
              <tr key={id}>
                <td>{data.name}</td>
                <td>{data.type}</td>
                <td>{data.launchDate}</td>
                <td>{data.operational ? "Active" : "Inactive"}</td>
              </tr>
            ))
          }
        {/* <tr>
          <td>Row Data TBD</td>
        </tr> */}
        </tbody>
      </table>
  );
};

export default Table;