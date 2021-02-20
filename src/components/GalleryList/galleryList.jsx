import ImageItem from "../GalleryItem/galleryItem";

const ShowImages = function ({imageList, imgClicked, likeBtnClick }) {
  // loop through and render on page
  // console.log('in show images: ', imageList);
 return ( 
   <div>
  {imageList.map(img =>

    <ImageItem key={img.id} img={img} imgClicked={imgClicked} likeBtnClick={likeBtnClick}/>
    // return (
    //   <div key={img.id} className='pic-btn'>
    //   <img className='pic-size' src= {img.path} onClick={imgClicked} />
    //   <p>{img.likes} Likes</p>
    //   <button id={img.id}className='like-btn' onClick={likeBtnClick}>LIKE</button>
    //   </div>
    // )
  )}
  </div>
 )
}

export default ShowImages;
