import './App.css';
import axios from 'axios';
import Buttons from './components/Buttons';
import SearchPhotos from './components/SearchPhotos';
import { apiKey } from './api/config';
import { useState, useEffect } from 'react';

function App() {
  const [image, setImage] = useState([]);
  const [imp, setImp] = useState("")

  useEffect(() => {
    async function ax() {
      if (imp !== "") {
        await axios
          .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${imp}&format=json&nojsoncallback=1`)
          .then((response) => {
            let dat = response.data.photos.photo;
            setImage(dat)
          })
      }
    }
    ax()
  }, [imp])
  const imgcard = image.map(img1 => (<img key={img1.id} className='images' alt='imagenes' src={`https://live.staticflickr.com/${img1.server}/${img1.id}_${img1.secret}.jpg`}></img>))
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>SnapShot</h1>
        <Buttons buttons={setImp} />
        <SearchPhotos search1={setImp} />
      </div>
      <div><h2> {imp} Picture</h2></div>
      <div>
        {imgcard}
      </div>
    </div>

  );
}
export default App;




