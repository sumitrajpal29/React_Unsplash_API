export default function Grid({ image, setBG, scroll }) {
    // return <div class="image-container">
    //     <img src={image.urls.small} alt="Image 1"></img>
    // </div>
    const description = image.description === null ? image.alt_description : image.description
    function handleClick() {
        setBG(image.urls.regular);
        scroll();
    }
    return (
        <div className=" w-96 h-96  mx-4 my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <a href={image.links.download} target="_blank" download={image.alternative_slugs.en + '.jpg'} />
            <img onClick={handleClick} className="w-full h-80 object-cover" src={image.urls.small} alt="card" />
            <div className="">
                <p className="text-gray-700 text-base">{description}</p>
                <p>{image.likes}</p>
            </div>
        </div>)


}