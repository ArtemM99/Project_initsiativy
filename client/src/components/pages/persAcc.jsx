import React from 'react';
import './persAcc.css'; // Убедитесь, что эта строка раскомментирована
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PersAcc = () => {
  return (
    <Container className="profile-container">
      <header className="profile-header">
        <h1>Мой Профиль</h1>
      </header>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <img
                src="path/to/user/photo.jpg"
                alt="Пользователь"
                className="profile-photo"
              />
              <Card.Title className="username">Имя пользователя</Card.Title>
              <Button variant="primary" className="edit-profile-btn">
                Редактировать профиль
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <section className="initiatives-section">
        <h2>Мои инициативы</h2>
        <ul>
          <li>Инициатива 1</li>
          <li>Инициатива 2</li>
          <li>Инициатива 3</li>
        </ul>
      </section>
    </Container>
  );
};

export default PersAcc;
