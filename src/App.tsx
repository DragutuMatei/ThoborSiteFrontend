import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Awards from "./Components/Awards/awards";
import Blog from "./Components/Blog/blog";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/login";
import Navbar from "./Components/Navbar/navbar";
import Register from "./Components/Register/register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
