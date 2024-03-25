import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Navegacion = () => {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "unactive");

  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link to="/"><img src="/gorro.jpg" width="80px"></img></Link>
          <Nav className="justify-content-end">
            <NavLink to="/" className={setActiveClass}>Inicio</NavLink>
            <NavLink to="/pokemones" className={setActiveClass}>Pokemones</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navegacion