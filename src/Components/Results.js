import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Results(props) {

    return (
        
            <Container className="bookSearchContainer">
                <Row>
                    <Col lg={12} className="bookSearchTitle">
                        <h4>Results</h4>
                    </Col>
                </Row>
                {props.children}
            </Container>
    )
}