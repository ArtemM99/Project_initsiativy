import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function InitCard({init}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://quasa.io/storage/images/news/Ggm2ZWUSsLBBtUwph7NlXpGPzNB3RZQY0rQ4xq02.jpg" />
      <Card.Body>
        <Card.Title>{init.title}</Card.Title>
        <Card.Text>{init.shortDescription}</Card.Text>
        <Card.Text>Собрано голосов {init.votesFor}</Card.Text>
        <Link to={`/card/${init.id}`}>
        <Button>Подробнее</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default InitCard;
