import './App.css';
import axios from 'axios';
import Buttons from './components/Buttons';
import SearchPhotos from './components/SearchPhotos';
import { apiKey } from './api/config';
import { useState, useEffect } from 'react';
import { Tittle } from './components/Tittle';

function App() {
  const [image, setImage] = useState([]);
  const [imp, setImp] = useState("")

  useEffect(() => {
    async function ax() {

      await axios
        .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${imp}&format=json&nojsoncallback=1`)
        .then((response) => {
          let dat = response.data.photos.photo;
          setImage(dat)
        })

    }
    if (imp !== "") {
      ax()
    }
  }, [imp])
  return (
    <div className="App">
      <div className='container'>
        <Tittle />
        <SearchPhotos search1={setImp} />
        <Buttons buttons={setImp} palabras={["Mountain", "Birds","Cars"]} />
      </div>
      <div><h2> {imp} Pictures</h2></div>
      <div>
        {image.map(img1 => (<img key={img1.id} className='images' alt='imagenes' src={`https://live.staticflickr.com/${img1.server}/${img1.id}_${img1.secret}.jpg`}></img>))}
      </div>
    </div>

  );
}
export default App;




