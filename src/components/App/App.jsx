import React, { useState, useEffect, useToggle } from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/galleryList'
import GalleryForm from '../GalleryForm/galleryForm'

function App() {
  // variables and states
  const [imageList, setImageList] = useState([]); //set as array
  const [newPhotoDescription, setNewPhotoDescription] =useState('');
  const [newPhotoURL, setNewPhotoURL] = useState('');
  
  // this will get the previously loaded images on page load
  useEffect(() => {
    // console.log('in the useEffect');
    getImages();
  }, []);

  // ----- all my function declarations -----

  // this will get the data
  const getImages = function () {
    // the axios "GET" call
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(res => {
      // use the data from the response
      // set the img list with the data
      setImageList(res.data);
    }).catch(err => {
      console.log(err);
    }); // end axios get
  }; // end the getImages function

  const likeBtnClick = function (e) {
    let clickedPicId = e.target.id;
    // this will 'PUT' an added like in data
    axios({
      method:'PUT',
      url:`/gallery/like/${clickedPicId}`
    }).then(res => {
      // re-render the picture
      // console.log('put res: ', res);
      getImages();

    }).catch(err => console.log(err)); // end put
  } // end likeBtnClick

  const addPhoto = function (e) {
    e.preventDefault();
    console.log('add photo activated');
    console.log('desc', newPhotoDescription);
    console.log('url', newPhotoURL);
  }



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <GalleryList imageList={imageList} 
        likeBtnClick={likeBtnClick}
        />

        <GalleryForm addPhoto={addPhoto} newPhotoDescription={newPhotoDescription} setNewPhotoDescription={setNewPhotoDescription} newPhotoURL={newPhotoURL} setNewPhotoURL={setNewPhotoURL} />

        
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
