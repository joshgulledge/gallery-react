
// import the styling
import './galleryForm.css'


const GalleryForm = function ({addPhoto, newPhotoDescription, setNewPhotoDescription, newPhotoURL, setNewPhotoURL}) {
  return (
    <div className="new-photo-input">
      <h2> Add a New Photo</h2>
      <form className="new-photo-form" onSubmit={addPhoto}>

        
        <input type="text" placeholder="Enter a photo description" value={newPhotoDescription} id="photo-description-input inputSuccess" onChange={event => setNewPhotoDescription(event.target.value)}/>

        <input type="text" placeholder="Enter the photo url" id="photo-path" value={newPhotoURL} onChange={event => setNewPhotoURL(event.target.value)}/>

        <div>
        <button type="submit" id="submit-btn">Submit new photo</button>
        </div>
      </form>
    </div>
  )
};

export default GalleryForm;