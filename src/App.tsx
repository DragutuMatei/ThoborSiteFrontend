import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Awards from "./Pages/Awards/awards";
import Blog from "./Pages/Blog/blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Navbar from "./Components/Navbar/navbar";
import Register from "./Pages/Register/register";

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
