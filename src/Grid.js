export default function Grid({ image }) {
    // return <div class="image-container">
    //     <img src={image.urls.small} alt="Image 1"></img>
    // </div>

    return (
        <div className=" w-96 h-96  mx-4 my-4 p-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-80 object-cover" src={image.urls.small} alt="card" />
            <div className="">
                <p className="text-gray-700 text-base">{image.alt_description}</p>
            </div>
        </div>)


}