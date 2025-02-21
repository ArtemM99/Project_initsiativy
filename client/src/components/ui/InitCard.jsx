import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import './styles.css';

function InitCard({ init }) {
  return (
    <Card className="card-style" style={{ width: '300px', height: '400px', marginBottom: '25px'}}>
      <Card.Img
        style={{ width: 'auto', height: '180px' }}
        variant="top"
        src={init.votesTotal}
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
