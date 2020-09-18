import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../mobile.css";
const Name = (props) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleName = (e) => {
    localStorage.setItem("name", name);
    props.setDisplay(0);
  };
  return (
    <div className="parent">
      <div className="content">
        <h1>
          Hey,Welcome To Checklist Lets,begin starting with knowing your name
        </h1>
        <div>
          <TextField
            id="standard-basic"
            onChange={handleChange}
            value={name}
            label="Enter Your Name"
          />
          <Button color="primary" variant="contained" onClick={handleName}>
            Submit
          </Button>
        </div>
      </div>
      <div className="image">
        <img src="https://image.freepik.com/free-vector/it-specialists-upgrading-operating-system-illustration_1262-18941.jpg" />
      </div>
    </div>
  );
};
export default Name;
