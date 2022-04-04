import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Add from "../../pages/Add";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <NavLink to="/" className="alink">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              List
            </Typography>
          </NavLink>

          <NavLink to="/add" className="alink">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add Product
            </Typography>
          </NavLink>

          <Button color="inherit">Avatar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
