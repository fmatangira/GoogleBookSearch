import Link from 'next/link';
import { Row, Col, Form } from 'react-bootstrap';

export default function ResultsData(props) {
    
    return (
        
        props.array.map((res, i) => 
            
            <>
                <Row key={i} className="results">
                    <Col lg={9} className="bookSearchTitle">
                        <h4>{res.volumeInfo.title}</h4>
                        <p className="author">Written by {res.volumeInfo.authors}</p>
                        <div>
                            <img src={res.volumeInfo.imageLinks && res.volumeInfo.imageLinks.thumbnail} alt='book-pic' className='resultsPic' />
                            <p className="bookDesc">{res.volumeInfo.description}</p>
                        </div>
                    </Col>
                    <Col lg={3} className="bookSearchTitle">
                        <Form.Group className="resultButtons">
                            <a href={res.volumeInfo.canonicalVolumeLink} className="button1"><input type="submit" value="View" /></a>
                            <Link href="/saved"><input type="submit" value="Save"/></Link>
                        </Form.Group>
                    </Col>
                </Row>
                <br></br>
            </>
            
        )
    )
}