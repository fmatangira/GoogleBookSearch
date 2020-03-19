// import { Container, Row, Col } from 'reactstrap';
import Navbar from '../src/Components/Navbar';
import Banner from '../src/Components/BookSearchBanner';
import Form from '../src/Components/BookSearchForm';

export default function Index() {

  return(
    <>
      <Navbar />
      <Banner />
      <Form />
    </>
          
  )
}