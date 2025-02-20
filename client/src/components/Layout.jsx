import React from 'react';
import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';

export default function Layout({user}) {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <title>Инициативы</title>
          <Navbar.Brand>Инициативы.ru</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>Привет, {user.firstName}</Nav.Link>
              <Nav.Link as={Link} to="/">
                Главная страница
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Войти
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Регистрация
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
