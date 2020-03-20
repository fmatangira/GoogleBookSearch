import { Container, Row, Col, Form } from 'react-bootstrap';

export default function BookSearchForm() {

    return (
        <Container className="bookSearchContainer">
            <Row>
                <Col lg={12} className="bookSearchTitle">
                    <h4 >Book Search</h4>
                    <Form.Group className="searchForm">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter the title of the book..."/>
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button">Search</button>
                                </span>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}