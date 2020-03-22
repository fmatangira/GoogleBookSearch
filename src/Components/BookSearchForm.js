import { Container, Row, Col, Form } from 'react-bootstrap';

export default function BookSearchForm(props) {

    return (
        <Container className="bookSearchContainer">
            <Row>
                <Col lg={12} className="bookSearchTitle">
                    <h4 >Book Search</h4>
                    <Form.Group className="searchForm">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter the title of the book..." ref={props.refer}/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button" onClick={props.handleClick}>Search</button>
                                </span>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}