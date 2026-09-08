import Navbar from "../components/navbar/Navbar.js";
import Hero from "../components/Hero/Hero.js";
import About from "../components/About/About.js";
import Services from "../components/Services/Services.js";
import Footer from "../components/Footer/Footer.js";
function Landing_page() {

  return (
      <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
      </>
  );
}

export default Landing_page;