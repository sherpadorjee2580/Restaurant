// App.jsx
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./pages/Menu/Menu";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import Testimonial from "./pages/Testimonial/Testimonial";
import Service from "./pages/Service/Service";
import { BookTable } from "./pages/BookTable/BookTable";
import { AdminLogin } from "./pages/AdminLogin/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />

      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/book" element={<BookTable />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
