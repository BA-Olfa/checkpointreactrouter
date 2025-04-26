import { Link } from 'react-router-dom';
import movies from '../Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div className="container mt-5">
    <Row xs={1} md={3} className="g-3">
    {movies.map((movie)=>(
            <Col key={movie.id}>
            <Card className="CardMovie">
            <Card.Img variant="top" src={movie.image} className="imageMovie"/>
            <Card.Body className='detailFilm'>
            
                <Card.Title>
                <span style={{color: "#ffc107d4"}}>Titre :</span><span>{movie.titre}</span>
                </Card.Title>
                <Card.Title className='descriptionFilm'>
                <span style={{color: "#ffc107d4"}}>Description :</span>
                <span>{movie.description}</span> 
                </Card.Title>
                
            </Card.Body>
            <Card.Body className='detailFilm'>
                <Card.Title>
                <Link to={`/movie/${movie.id}`}>Voir Détails</Link>
                </Card.Title>
            </Card.Body>
            </Card>
        </Col>
    ))}
    
   </Row>
   </div>
  );
}

export default Home;