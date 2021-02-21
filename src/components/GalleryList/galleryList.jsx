import ImageItem from "../GalleryItem/galleryItem";

const GalleryList = function ({imageList, likeBtnClick }) {
  // loop through and render on page
  // console.log('in show images: ', imageList);
 return ( 
   <div>
  {imageList.map(img =>

    <ImageItem key={img.id} 
    img={img} 
    likeBtnClick={likeBtnClick}
    />
  )}
  </div>
 )
}

export default GalleryList;
