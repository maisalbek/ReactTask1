import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { todoContext } from "../contextProvider/ContextProvider";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Add() {
  const { addNewTodo } = React.useContext(todoContext);

  const [product, setProduct] = React.useState({
    title: "",
    price: "",
    img: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  const handleSubmit = () => {
    addNewTodo(product);
    setProduct({ title: "", price: "", img: "" });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button style={{ color: "black", fontSize: "20px" }} onClick={handleOpen}>
        Add product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ textAlign: "center" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "20px" }}
          >
            Add New Product
          </Typography>
          <TextField
            onChange={(e) => handleChange(e)}
            name="title"
            // value="product.title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
          <TextField
            onChange={(e) => handleChange(e)}
            name="price"
            // value="product.price"
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(e) => handleChange(e)}
            name="img"
            id="outlined-basic"
            label="Img"
            variant="outlined"
          />
          <br />
          <Link to="/">
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
