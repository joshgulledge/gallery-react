import Axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ShowImages from '../GalleryList/galleryList'

function App() {
  // variables and states
  const [imageList, setImageList] = useState([]); //set as array

  // this will get the previously loaded images on page load
  useEffect(() => {
    // console.log('in the useEffect');
    getImages();
  }, []);

  // all my function declarations
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



  // const ShowImages = function () {
  //   // loop through and render on page
  //   // console.log('in show images: ', imageList);
  //  return ( 
  //    <div>
  //   {imageList.map((img, index) => {
  //     return (
  //       <div key={img.id} className='pic-btn'>
  //       <img className='pic-size' src= {img.path} onClick={imgClicked} />
  //       <p>{img.likes} Likes</p>
  //       <button id={img.id}className='like-btn' onClick={likeBtnClick}>LIKE</button>
  //       </div>
  //     )
  //   })}
  //   </div>
  //  )
  // }

  const imgClicked = function () {
    console.log('the image is clicked');
  }

  const likeBtnClick = function (e) {
    let clickedPicId = e.target.id;
    // this will 'PUT' an added like in data
    axios({
      method:'PUT',
      url:`/gallery/like/${clickedPicId}`,
    }).then(res => {
      // re-render the picture
      // console.log('put res: ', res);
      getImages();

    }).catch(err => console.log(err)); // end put
  } // end likeBtnClick



  

  // this will be my variables and useStates


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <ShowImages imageList={imageList} imgClicked={imgClicked} likeBtnClick={likeBtnClick}/>

        
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
