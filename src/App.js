import './App.css';
import './styles/starparticles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="gradient-background">
      <div className="page-bg"></div>
        <div className = "animation-wrapper">
          <div className = "particle particle-1"></div>
          <div className = "particle particle-2"></div>
          <div className = "particle particle-3"></div>
          <div className = "particle particle-4"></div>
        </div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;