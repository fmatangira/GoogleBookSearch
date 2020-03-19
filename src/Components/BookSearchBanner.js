import { Container, Row, Col } from 'react-bootstrap';

export default function BookSearch() {

    return(
        <Container className="bookSearchContainer">
            <Row>
                <Col lg={12} className="bookSearchTitle">
                    <h2>(REACT) Google Book Search</h2>
                    <p>Search for and Save Books of Interest</p>
                </Col>
            </Row>
        </Container>
    )
}