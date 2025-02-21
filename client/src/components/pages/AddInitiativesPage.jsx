import  { useState, useEffect } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const AddInitiativePage = () => {
  const navigate = useNavigate();

  
  const [user, setUser] = useState(null);

  

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('Федеральный');
  const [region, setRegion] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Автоматически подгружаем регион и муниципалитет пользователя
  useEffect(() => {
    if (user && (level === 'Региональный' || level === 'Муниципальный')) {
      setRegion(user.region || '');
      setMunicipality(user.municipality || '');
    }
  }, [level, user]);


 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

//     try {
//       const initiativeData = {
//         title,
//         description,
//         level,
//         region: level === 'Региональный' ? region : undefined,
//         municipality: level === 'Муниципальный' ? municipality : undefined,
//       };

      

//       // Перенаправляем пользователя после успешного добавления
//       navigate('/initiatives');
//     } catch (err) {
//       setError('Ошибка при добавлении инициативы: ' + err.message);
//     } finally {
//       setLoading(false);
//     }
  };

 

  return (
    <div className="container mt-4">
      <h2>Добавить инициативу</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Название</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Полное описание с мотивацией</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Уровень инициативы</Form.Label>
          <Form.Select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="Федеральный">Федеральный</option>
            <option value="Региональный">Региональный</option>
            <option value="Муниципальный">Муниципальный</option>
          </Form.Select>
        </Form.Group>
        {level === 'Региональный' && (
          <Form.Group className="mb-3">
            <Form.Label>Регион</Form.Label>
            <Form.Control
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            />
          </Form.Group>
        )}
        {level === 'Муниципальный' && (
          <Form.Group className="mb-3">
            <Form.Label>Муниципалитет</Form.Label>
            <Form.Control
              type="text"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
              required
            />
          </Form.Group>
        )}
        <Button type="submit" disabled={loading}>
          {loading ? <Spinner size="sm" /> : 'Добавить'}
        </Button>
      </Form>
    </div>
  );
};

export default AddInitiativePage;
