import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_KEY

const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null);
    
    useEffect(() => {
       
        fetchPhoto();

        async function fetchPhoto()
        {
            const response = await fetch (
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await response.json();
           
            setPhotoData(data)
        }


    }, [])

    if(!photoData) return <div />

    return (
        <>
        <Navbar />
        <div>
            {photoData.media_type === "image"? (
                <img src={photoData.url} alt={photoData.title} />
            ): (
                <iframe 
                    title="space-video"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />

               
            ) }
           
           <div>
                <h1>{photoData.title}</h1>
                <p> {photoData.date} </p>
                <p> {photoData.explanation} </p>
           </div>
           

        </div>
        </>
    )
}

export default NasaPhoto
