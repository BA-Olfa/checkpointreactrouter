import { useParams, Link } from 'react-router-dom';
import movies from '../Movies';
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div>Film introuvable</div>;

  return (
    <div className="container mt-5">
    <Card style={{ width: "35rem" }} className="mx-auto text-center">
    <iframe
            width="560"
            height="315"
            src={movie.LinkMovie}
            title="YouTube video player"
            allowFullScreen
        ></iframe>
    <Card.Body>
        <Card.Title>{movie.titre}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        
        
    </Card.Body>
    </Card>
    <div className="text-center mt-3">
    <Link to="/">← Retour à la page d'accueil</Link> 
    </div>
    </div>
  );
}

export default MovieDetail;