import Row from './Row'
import React from 'react'
import requests from './requests'
import './App.css'
import Banner from './Banner'
import Nav from './Nav';
const App = () => {
  return (
    <div className='App'>
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' isLargeRow={true} fetchUrl={requests.fetchNeflixOriginals}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App