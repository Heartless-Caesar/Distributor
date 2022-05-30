import CardComponent from './Card'
import { Col, Row, Container } from 'react-bootstrap'
import ModalPages from './Modal/Modal'
const Body = () => {
    return (
        <Container className="mt-5 mb-5">
            <Container className="d-grid gap-2">
                <Row className="mb-3">
                    <Col>
                        <ModalPages />
                    </Col>
                    <Col>
                        <ModalPages />
                    </Col>
                </Row>
            </Container>
            <Row className="mt-5">
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
