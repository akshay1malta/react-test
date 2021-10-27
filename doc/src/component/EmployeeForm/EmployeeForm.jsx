import React, { useState, useEffect } from "react";

const EmployeeForm = ({changeTableData, editData}) => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("")
  const [dob, setDob] = useState("")
  const [desi, setDesi] = useState("")
  const [fLink, setFlink] = useState("")
  const [exp, setExp] = useState("")
  const [id, setId] = useState(null)

  const submitForm = () => {
    changeTableData({ fName, lName, dob, desi, fLink, exp, id})
      if(id){
        setId(null)
      }
    clearForm()
  };

  const handleFormData = ({ key, val }) => {
    switch (key) {
      case "fName":
        setFname(val);
        return;
      case "lName":
        setLname(val);
        return;
      case "dob":
        setDob(val);
        return;
      case "desi":
        setDesi(val);
        return;
      case "fLink":
        setFlink(val);
        return;
      case "exp":
        setExp(val);
        return;
      default:
        return;
    }
  };

  const clearForm =()=>{
    setFname('')
    setLname('')
    setDob('')
    setDesi('')
    setFlink('')
    setExp('')
  }

  useEffect(()=>{
if(Object.keys(editData).length>0){
    setFname(editData.fName)
    setLname(editData.lName)
    setDob(editData.dob)
    setDesi(editData.desi)
    setFlink(editData.fLink)
    setExp(editData.exp)
    setId(editData.id)
}
  },[editData])

  return (
    <>
      <label>First Name :</label>
      <input
        onChange={(e) => handleFormData({ key: "fName", val: e.target.value })}
        value={fName}
      />
      <br />
      <label>Last Name:</label>
      <input
        onChange={(e) => handleFormData({ key: "lName", val: e.target.value })}
        value={lName}
      />
      <br />
      <label>DOB :</label>
      <input
        onChange={(e) => handleFormData({ key: "dob", val: e.target.value })}
        value={dob}
      />
      <br />
      <label>Designation :</label>
      <input
        onChange={(e) => handleFormData({ key: "desi", val: e.target.value })}
        value={desi}
      />
      <br />
      <label>Profile Photo Link :</label>
      <input
        onChange={(e) => handleFormData({ key: "fLink", val: e.target.value })}
        value={fLink}
      />
      <br />
      <label>Experience :</label>
      <input
        onChange={(e) => handleFormData({ key: "exp", val: e.target.value })}
        value={exp}
      />
      <br />

      <button type="button" onClick={()=>submitForm()}>Submit</button>
    </>
  );
};

export default EmployeeForm;
