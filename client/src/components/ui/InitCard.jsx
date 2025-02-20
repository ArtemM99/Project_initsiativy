import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import './styles.css';

function InitCard({ init }) {
  return (
    <Card className="card-style" style={{ width: '300px', height: '450px' }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLKrKZfURA2L5tdShI6A9DkFKrEokpPoWIg&s"
      />
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
