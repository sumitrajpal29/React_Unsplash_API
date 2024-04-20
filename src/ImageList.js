import { useEffect, useState } from "react"
import Grid from "./Grid";
import { useViewport } from "react-viewport-hooks";

export default function ImageList({ setBG, scroll, images }) {


    return <>
        <div className="container mx-auto mt-8 flex flex-wrap justify-center">
            {images.map((image) => <Grid key={image.id} image={image} setBG={setBG} scroll={scroll} />)}
        </div>
    </>
}