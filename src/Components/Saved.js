import Link from 'next/link';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Saved(props) {

    return (
        <Container className="bookSearchContainer">
            <Row>
                <Col lg={12} className="bookSearchTitle">
                    <h4>Saved</h4>
                </Col>
            </Row>
            {props.children}
            <Row className="results">
                <Col lg={9} className="bookSearchTitle">
                    <h4>Harry Potter</h4>
                    <h5>The Great Books behind the Hogwarts Adventures</h5>
                    <p className="author">Written by John Granger</p>
                    <div>
                        <img src="https://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s1200x630.jpg" alt='book-pic' className='resultsPic' />
                        <p className="bookDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Col>
                <Col lg={3} className="bookSearchTitle">
                    <Form.Group className="resultButtons">
                        <a href={props.bookUrl} className="button1"><input type="submit" value="View" /></a>
                        <button onClick={props.handleDelete}>Delete</button>
                    </Form.Group>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}