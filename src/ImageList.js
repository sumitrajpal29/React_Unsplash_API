import { useEffect, useState } from "react"
import Grid from "./Grid";

export default function ImageList() {
    const [images, setImages] = useState([]);
    const API_URL = 'https://api.unsplash.com'
    const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

    useEffect(() => {
        fetch(`${API_URL}/photos?client_id=${API_KEY}&orientation=landscape`)
            .then((response) => response.json())
            .then((data) => { setImages(data); console.log(data) })
            .catch((error) => console.log('Error in fetching images:', error))
    }, [])


    return <>
        {images.map((image) => <Grid key={image.id} image={image} />)}
    </>
}