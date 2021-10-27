import React, { useState } from "react";
import "./Home.css";
import EmployeeForm from "./EmployeeForm/EmployeeForm";

const Home = () => {
  const [tableData, setTableData] = useState([]);
  const tableHead = [
    "First Name",
    "Last Name",
    "DOB",
    "Designation",
    "Profile Photo Link",
    "Experience",
    "Id",
    "",
  ];
  const [editData, setEditData] = useState({});

  const changeTableData = (data) => {
    if (data.id) {
      editTable(data);
      return;
    }
    let id = 0;
    if (tableData.length) {
      const lastData = tableData[tableData.length - 1];
      id = parseInt(lastData.id) + 1;
    }

    data["id"] = id;

    console.log(tableData);
    setTableData([...tableData, data]);
  };

  const editTable = (data) => {
    const allData = [...tableData];
    const dataI = allData.findIndex((each) => each.id == data.id);
    allData[dataI] = data;
    setTableData(allData);
  };

  const onDelete = (id) => {
    const allData = [...tableData];
    const filterdData = allData.filter((each) => each.id != id);
    setTableData(filterdData);
  };

  const onEdit = (data) => {
    setEditData(data);
  };

  return (
    <>
      <div className="container">
        <div>
          <h3>Employee table</h3>
          <table>
            <thead>
              {tableHead.map((head) => {
                return <th>{head}</th>;
              })}
            </thead>
            <tbody>
              {tableData.length
                ? tableData.map((row) => {
                    return (
                      <tr>
                        {Object.values(row).map((eachData) => {
                          return <td>{eachData}</td>;
                        })}
                        <td>
                          <button
                            onClick={() => {
                              onDelete(row.id);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              onEdit(row);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
        <div>
          <h3>Employee Form</h3>
          <EmployeeForm changeTableData={changeTableData} editData={editData} />
        </div>
      </div>
    </>
  );
};

export default Home;
