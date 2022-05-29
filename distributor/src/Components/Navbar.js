import { Nav, Navbar, Container } from 'react-bootstrap'

const Navbar = () => {
    return (
        <Navbar expand="sm" bg="dark">
            <Container fluid>
                <Navbar.Brand>Store Name Here</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Catalog">Catalog</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar
