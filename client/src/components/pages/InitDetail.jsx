import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card } from 'react-bootstrap';


export default function InitDetail() {
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
