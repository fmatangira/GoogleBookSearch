import Link from 'next/link';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

export default function GoogleNavbar() {

    return(
        <Container>
            <Row>
                <Col lg={12} className="navCol">
                <Navbar bg="light" expand="lg">
                        <Navbar.Brand>Google Books</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Link href="/"><a className="nav-link">Search</a></Link>
                            <Link href="/saved"><a className="nav-link">Saved</a></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}