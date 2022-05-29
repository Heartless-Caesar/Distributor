import { Card } from 'react-bootstrap'

const Card = () => {
    return (
        <Card>
            <Card.Title className="card-title">Title</Card.Title>
            <Card.Body>
                <Card.Text>
                    Some description here acting as a placeholder
                </Card.Text>
            </Card.Body>
            <button className="btn btn-primary ">View more</button>
        </Card>
    )
}

export default Card
