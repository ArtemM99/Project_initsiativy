// import { useState } from 'react';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router';

// const initData = {
//   name: '',
//   email: '',
//   password: '',
//   repeat: '',
// };

// export default function SignupPage({ handleSignup }) {
//   const [formData, setFormData] = useState(initData);
//   const handleChange = (e) =>
//     setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.repeat !== formData.password) return alert('Пароли не совпадают');
//     await handleSignup(formData);
//     setFormData(initData);
//   };
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <Card className="p-4 shadow-sm" style={{ width: '350px' }}>
//         <h3 className="text-center mb-3">Регистрация</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formName">
//             <Form.Label>Имя</Form.Label>
//             <Form.Control
//               value={formData.name}
//               onChange={handleChange}
//               name="name"
//               type="text"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Электронная почта</Form.Label>
//             <Form.Control
//               value={formData.email}
//               onChange={handleChange}
//               name="email"
//               type="email"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Пароль</Form.Label>
//             <Form.Control
//               value={formData.password}
//               onChange={handleChange}
//               name="password"
//               type="password"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formPasswordRepeat">
//             <Form.Label>Повтори пароль</Form.Label>
//             <Form.Control
//               isValid={
//                 formData.repeat.length > 0 && formData.repeat === formData.password
//               }
//               isInvalid={
//                 formData.repeat.length > 0 && formData.repeat !== formData.password
//               }
//               value={formData.repeat}
//               onChange={handleChange}
//               name="repeat"
//               type="password"
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit" className="w-100">
//             Регистрация
//           </Button>
//         </Form>
//         <div className="text-center mt-3">
//           <Link to="/auth/login" className="text-decoration-none">
//             Уже есть аккаунт?
//           </Link>
//         </div>
//       </Card>
//     </div>
//   );
// }
