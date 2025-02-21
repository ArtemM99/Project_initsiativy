import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export default function SignupPage({ signupHandler }) {

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="p-4 shadow-sm" style={{ width: '350px' }}>
      <h3 className="text-center mb-3">Регистрация</h3>
      <Form onSubmit={signupHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Имя</Form.Label>
          <Form.Control name="firstName" type="text" placeholder="Имя" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control name="lastName" type="text" placeholder="Фамилия" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Отчество</Form.Label>
          <Form.Control name="middleName" type="text" placeholder="Отчество" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Электронная почта</Form.Label>
          <Form.Control name="email" type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control name="password" type="password" placeholder="Пароль" required />
        </Form.Group>


        <Button variant="primary" type="submit" className="w-100">
          Регистрация
        </Button>
      </Form>
    </Card>
  </div>
  );
}




{/* <form onSubmit={signupHandler}>
<input name="firstName" type="text" placeholder="Имя" required />
<input name="lastName" type="text" placeholder="Фамилия" required />
<input name="middleName" type="text" placeholder="Отчество" />
<input name="email" type="email" placeholder="Email" required />
<input name="password" type="password" placeholder="Пароль" />
<button type="submit">Зарегистрироваться</button>
</form> */}