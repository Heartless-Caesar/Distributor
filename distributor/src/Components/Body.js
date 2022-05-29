import CardComponent from './Card'
import { Col, Row, Container } from 'react-bootstrap'

const Body = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <CardComponent />
                </Col>
                <Col>
                    <CardComponent />
                </Col>
                <Col>
                    <CardComponent />
                </Col>
                <Col>
                    <CardComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default Body
