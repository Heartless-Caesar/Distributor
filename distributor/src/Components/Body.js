import Card from './Card'
import { Col, Row } from 'react-bootstrap'

const Body = () => {
    return (
        <Row>
            <Col>
                <Card />
            </Col>
            <Col>
                <Card />
            </Col>
            <Col>
                <Card />
            </Col>
        </Row>
    )
}

export default Body
