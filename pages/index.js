import { useState, useEffect, useRef } from 'react'; 
import Navbar from '../src/Components/Navbar';
import Banner from '../src/Components/BookSearchBanner';
import Form from '../src/Components/BookSearchForm';
import Results from '../src/Components/Results';
import ResultsData from '../src/Components/ResultsData';
import ReactLoading from 'react-loading';
import axios from 'axios';
import db from '../models';

export default function Index() {
  db.sequelize.sync()
  const [ result, setResult ] = useState(null);
  const [ search, setSearch ] = useState("");

  const searchInput = useRef();
  
  const handleInitialSearch = () => search === "" ? "" : <ReactLoading type={'bubbles'} color={'#aed0fd'} height={167} width={75}/>;

  const handleUserSubmit = () => setSearch(searchInput.current.value);

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(function (res) {
            setResult(res.data.items);
            // console.log(res.data);
        })
        .catch(err => console.log(err)
        )},[handleUserSubmit])  
  

  return(
    <>
      <Navbar />
      <Banner />
      <Form refer={searchInput} handleClick={handleUserSubmit}/>
      <Results>
        {result ? <ResultsData array={result} /> : handleInitialSearch}
      </Results>
    </>
          
  )
}