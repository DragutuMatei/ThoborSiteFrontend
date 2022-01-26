import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import AlumniList from "./Pages/alumni/AlumniList";
import Awards from "./Pages/Awards/awards";
import Blog from "./Pages/Blog/blog";
import Contact from "./Pages/contact/Contact";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/alumni" element={<AlumniList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
