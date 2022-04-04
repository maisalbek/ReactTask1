import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import List from "./pages/List";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
