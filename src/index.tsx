import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import App from "./App";
import Blog from "./Components/Blog/blog";
import Awards from "./Components/Awards/awards";
import Register from "./Components/Register/register";
import Login from "./Components/Login/login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
