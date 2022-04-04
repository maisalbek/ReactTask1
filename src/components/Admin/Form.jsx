import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const initValues = {
  title: "",
  price: "",
  img: "",
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveValues(inpValues);
  };

  return (
    <div>
      <h2>Admin form</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
      >
        <TextField
          onChange={(e) => handleChange(e)}
          name="title"
          value={inpValues.title}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="price"
          value={inpValues.price}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleChange(e)}
          name="img"
          value={inpValues.img}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
