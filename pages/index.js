import { useState, useEffect } from 'react'; 
import Navbar from '../src/Components/Navbar';
import Banner from '../src/Components/BookSearchBanner';
import Form from '../src/Components/BookSearchForm';
import Results from '../src/Components/Results';

export default function Index() {

  const [ results, setResults ] = useState([])

  return(
    <>
      <Navbar />
      <Banner />
      <Form />
      <Results />
    </>
          
  )
}