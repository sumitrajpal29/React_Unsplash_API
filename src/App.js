import { useEffect, useState } from 'react';
import ImageList from './ImageList';

function App() {
  const [image, setImage] = useState('');
  // const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImage('https://images.unsplash.com/photo-1709913472012-a0c243ca6cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODQ2OTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE3NDA3MzZ8&ixlib=rb-4.0.3&q=80&w=1080');
    // fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&orientation=landscape`)
      .then(response => response.json())
      .then(data => {
        if (data.urls && data.urls.regular) {
          setImage(data.urls.regular);
          console.log("workingggg");
        }
        else {
          console.log('Invalid response from unsplash API:', data);
        }
      })
      .catch(err => {
        console.log('Error fetching random image:', err);
      });
  };

  const Time = Date();
  return (
    //style={{ backgroundImage: `url(${image})` }}
    <div className='bg-slate-700'>
      <header className='bg-black'>
        <h1 className='underline text-green-700 text-center text-3xl'>Welcome to your serenity...</h1>
        <p>
          {Time}
        </p>
      </header>
      <ImageList />
    </div>
  );
}

export default App;
