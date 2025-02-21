import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function InitDetail() {
  const [inputText, setInputText] = useState(''); // Текст, вводимый пользователем
  const [messages, setMessages] = useState([]); // Массив сообщений (пользователь и GigaChat)

  // Обработчик отправки сообщения
  const handleSubmit = async () => {
    if (!inputText.trim()) return; // Если сообщение пустое, ничего не делаем
    try {
      const response = await axios.post('/api/ai', { message: inputText });
      // Добавляем сообщение пользователя и ответ GigaChat в состояние
      setMessages([...messages, { user: inputText }, { gigachat: response.data }]);
      setInputText(''); // Очищаем текстовое поле
    } catch (error) {
      console.error('Error:', error); // Обработка ошибок
    }
  };

  const { id } = useParams();
  const [initDetail, setInitDetail] = useState(null);

  useEffect(() => {
    axios(`/api/init/${id}`)
      .then(({ data }) => setInitDetail(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!initDetail) {
    return <p>Загрузка...</p>;
  }
  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ minHeight: '100vh', marginTop: '30px' }}
    >
      <div className="giga-chat-container" style={{ padding: '20px', width: '400px' }}>
        <h1>GigaChat</h1>
        <div>
          {/* Отображаем все сообщения */}
          {messages.map((msg, index) => (
            <p key={index}>
              {msg.user ? `User: ${msg.user}` : `GigaChat: ${msg.gigachat}`}
            </p>
          ))}
        </div>
        {/* Поле для ввода сообщения */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Обработчик изменения текста
          style={{ width: '100%', height: '100px' }}
        />
        {/* Кнопка отправки */}
        <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
          Отправить
        </button>
      </div>

      <Card style={{ width: '70rem', height: 'auto' }}>
        <Card.Img style={{width: '350px', height:'250px',  marginLeft: 'auto', marginRight: 'auto'}}
          variant="top"
          src={initDetail.votesTotal}
        />
        <Card.Body>
          <Card.Title>Инициатива: {initDetail.title}</Card.Title>
          <Card.Title>Город: {initDetail.region}</Card.Title>
          <Card.Title>Автор: {initDetail.id}</Card.Title>
          <Card.Text>{initDetail.description}</Card.Text>
          <Card.Text>Собрано голосов {initDetail.votesFor}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
