import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import './App.css';

function App() {

  // all my function declarations
  const getImages = function () {
    console.log('in get images');
    
  }

  // this will get the previously loaded images on page load
  useEffect(() => {
    console.log('in the useEffect');
    getImages();
  });


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
