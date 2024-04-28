import { useEffect, useState, useRef } from 'react';
import ImageList from './ImageList';
import { useViewport } from "react-viewport-hooks";
import SearchBar from './SearchBar';

function App() {
  const [image, setImage] = useState('')
  // const [imageList, setImageList] = useState([])
  const [vw, setVW] = useState('landscape')
  const largeImage = useRef(image);
  // const vw = useViewport() < 768 ? 'portrait' : 'landscape'
  //----------------------------------------------------------------------
  const [images, setImages] = useState([]);
  const API_URL = 'https://api.unsplash.com'
  const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
  // const [vw, setVW] = useState('landscape');
  // vw = useViewport() < 768 ? 'portrait' : 'landscape'
  const VW = useViewport();
  const [method, setMethod] = useState('topics/wallpapers/photos?')
  // const Time = Date();
  const [searching, setSearching] = useState(false);

  function search(value) {
    setMethod('search/photos?page=1&query=girls&')
    setSearching(true);
  }


  function checkVW() {
    if (VW < 740)
      setVW('portrait')
  }


  // ---------------------------------------------------------

  // useEffect(() => {

  //   // vw=
  //   // setImage('https://images.unsplash.com/photo-1709913472012-a0c243ca6cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODQ2OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE3NDA3MzZ8&ixlib=rb-4.0.3&q=80&w=1080');
  //   // fetchRandomImage();
  // }, []);

  // const fetchRandomImage = () => {
  //   fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&orientation=landscape`)
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.urls && data.urls.regular) {
  //         setImage(data.urls.regular);
  //         console.log("workingggg");
  //       }
  //       else {
  //         console.log('Invalid response from unsplash API:', data);
  //       }
  //     })
  //     .catch(err => {
  //       console.log('Error fetching random image:', err);
  //     });
  // };

  const scroll = () => {
    largeImage.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // function search(input) {
  //   setMethod('search/photos/${input}')
  // }

  function fetchImages(searching) {
    fetch(`${API_URL}/${method}client_id=${API_KEY}&orientation=${vw}`)
      .then((response) => response.json())
      .then((data) => {
        if (searching) {
          // console.log(data.results);
          setImages(data.results);
        }
        else {
          setImages(data)
        }
        // setImage(images[0].urls.regular);
        console.log("success", data);
      })
      .catch((error) => console.log('Error in fetching images:', error))
  }


  useEffect(() => {
    checkVW();
    console.log(vw);
    fetchImages();

  }, [])

  return (
    //style={{ backgroundImage: `url(${image})` }}
    <div className='bg-slate-700' style={{ backgroundColor: 'white' }}>
      <header className='bg-black'>
        <h1 className='underline text-green-700 text-center text-3xl'>Welcome to your serenity...</h1>
        {/* <p>
          {Time}
        </p> */}
      </header>
      <SearchBar search={search} />
      {/* <div ref={largeImage}>
        <img src={image} />
      </div> */}

      {/* <div class="relative inline-block text-left">
        <div>
          <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">

            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sumit</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Amit</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Rahul</a>
          </div>
        </div>
      </div> */}


      <ImageList setBG={setImage} images={images} vw={vw} scroll={scroll} />
    </div>
  );
}

export default App;
