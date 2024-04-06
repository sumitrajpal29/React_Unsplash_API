import { useEffect, useState } from "react"
import Grid from "./Grid";
import { useViewport } from "react-viewport-hooks";

export default function ImageList({ setBG }) {
    const [images, setImages] = useState([]);
    const API_URL = 'https://api.unsplash.com'
    const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
    const [vw, setVW] = useState('landscape');
    // vw = useViewport() < 768 ? 'portrait' : 'landscape'
    const VW = useViewport();

    function checkVW() {
        if (VW < 740)
            setVW('portrait')
    }

    useEffect(() => {
        checkVW();
        console.log(vw);
        fetch(`${API_URL}/topics/wallpapers/photos?client_id=${API_KEY}&orientation=${vw}`)
            .then((response) => response.json())
            .then((data) => { setImages(data); setBG(data[0].urls.regular); console.log("success"); })
            .catch((error) => console.log('Error in fetching images:', error))
    }, [vw])

    return <>
        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
            {images.map((image) => <Grid key={image.id} image={image} />)}
        </div>
    </>
}