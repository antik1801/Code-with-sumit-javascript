import logo from './logo.svg';
import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>Hey this netflix clone is created by Gazi Ehsanul Haque</h1>
     <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;
