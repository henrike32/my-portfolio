import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import hslogo from '../assets/img/hlogo.png'
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import instagram from '../assets/img/instagram.png'
import { HashLink } from 'react-router-hash-link'
import { Link, BrowserRouter as Router } from 'react-router-dom'; 

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as={Link} to="/"> 
            <img src={hslogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
              <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
              <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/hslambert/"><img className="social-img" src={linkedin} alt="LinkedIn" /></a>
                <a href="https://github.com/henrike32"><img className="social-img" src={github} alt="GitHub" /></a>
                <a href="https://www.instagram.com/serhenri/"><img className="social-img" src={instagram} alt="Instagram" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>LET'S CONNECT</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}