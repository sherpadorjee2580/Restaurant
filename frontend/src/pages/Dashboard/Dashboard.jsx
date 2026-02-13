import Service from "../../components/Service/Service";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import Reservation from "../../components/Reservation/Reservation";
import Team from "../../components/Team/Team";
import About from "../../components/About/About";
import Testimonial from "../../components/Testimonial/Testimonial";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Hero />

      <Service />

      <About />
      <Menu />
      <Reservation />
      <Team />
      <Testimonial />

      <Footer />
    </>
  );
}

export default Dashboard;
