import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState('');
  useEffect(() => {
    fetchRandomImage();
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
    <div className="App" style={{ backgroundImage: `url(${image})` }}>
      <header className="App-header">
        {/* <img src={image} className="App-logo" alt="logo" /> */}
        <p>
          {Time}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
