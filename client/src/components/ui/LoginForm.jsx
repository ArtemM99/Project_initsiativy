import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router';

export default function LoginForm({ handleLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    handleLogin(data).then(() => form.reset());
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-sm" style={{ width: '350px' }}>
        <h3 className="text-center mb-3">Вход</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Электронная почта</Form.Label>
            <Form.Control name="email" type="email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control name="password" type="password" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Вход
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Link to="/auth/signup" className="text-decoration-none">
            Ещё нет аккаунта?
          </Link>
        </div>
      </Card>
    </div>
  );
}
