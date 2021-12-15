import React from 'react'
import { Card, Row } from 'react-bootstrap'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
        <Row>
        <Card className="card">
        <Card.Img src={movie.image} className="taswira"/>
        <Card.Body>
        <Card.Title> {movie.title} </Card.Title> 
        {movie.date}
        </Card.Body>
        <Card.Body>
        <StarRating rating={movie.rating} />
        </Card.Body>
        </Card>
        </Row>

        </div>
    )
}

export default MovieCard
