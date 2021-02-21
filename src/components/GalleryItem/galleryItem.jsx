// bring in use state
import {useState} from 'react';
import './galleryItem.css';

const ImageItem = function ({img, likeBtnClick, deleteImage}) {
  // set the state to false to begin with
  const [pictureClicked, setPictureClicked] = useState(false) // set as false initially 

  // listen for the image to be clicked
  const imgClicked = function () {
    // changes from false to true which controls 
    // if the image is displayed or the paragraph
    pictureClicked ? setPictureClicked(false) : setPictureClicked(true)
  } // end imgClicked

  

  return (
    <div className='pic-par'>

      {/* changes from pic to p, both with a click listener */}
      {pictureClicked ? <div><p className='words' onClick={imgClicked}>{img.description}</p> <button id={img.id} onClick={deleteImage}>Delete Image</button></div> : <img className='pic-size' src= {img.path} onClick={imgClicked} /> }

      {/* This is always displayed */}
      <p>{img.likes} Likes</p>
      <button id={img.id} className='like-btn' onClick={likeBtnClick}>LIKE</button>
      </div>
  ) // end return
} // end imageItem

export default ImageItem;