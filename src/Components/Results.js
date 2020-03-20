import Link from 'next/link';
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
            <Row className="results">
                <Col lg={10} className="bookSearchTitle">
                    <h4>Harry Potter</h4>
                    <h5>The Great Books behind the Hogwarts Adventures</h5>
                    <p className="author">Written by John Granger</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col lg={2} className="bookSearchTitle">
                    <Form.Group className="resultButtons">
                        <a href={props.bookUrl} className="button1"><input type="submit" value="View"/></a>
                        <Link href="/saved"><input type="submit" value="Save"/></Link>
                    </Form.Group>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}