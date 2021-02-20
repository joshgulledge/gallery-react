import Axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // all my function declarations

  // this will get the data
  const getImages = function () {
    console.log('in get images');

    // the axios "GET" call
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(res => {
      // use the data from the response
      console.log(res.data);
      // set the img list with the data
      setImageList(res.data);
    }).catch(err => {
      console.log(err);
    }); // end axios get
  }; // end the getImages function

  // this will get the previously loaded images on page load
  useEffect(() => {
    console.log('in the useEffect');
    getImages();
  }, []);

  // this will be my variables and useStates

  const [imageList, setImageList] = useState([]); //set as array

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {imageList.map(img => {
          return (
            <img key={img.id} className='pic-size' src= {img.path} />
          )
        })}
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
