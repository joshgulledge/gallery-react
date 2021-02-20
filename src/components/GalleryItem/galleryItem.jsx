
const ImageItem = function ({img, imgClicked, likeBtnClick}) {
  return (
    <div className='pic-btn'>
      <img className='pic-size' src= {img.path} onClick={imgClicked} />
      <p>{img.likes} Likes</p>
      <button id={img.id}className='like-btn' onClick={likeBtnClick}>LIKE</button>
      </div>
  )
}

export default ImageItem;