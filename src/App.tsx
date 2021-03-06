import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Awards from "./pages/awards/Awards";
import AlumniList from "./pages/alumni/AlumniList";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/alumni" element={<AlumniList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
