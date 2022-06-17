import Image from "next/image"
import { useEffect, useState } from "react"

export default function Slideshow(){

    const [currentImage, setCurrentImage] = useState(0)
    const [images, setImages] = useState([
        "http://localhost:1337/uploads/Project_Thumbs_Pri_Ma_db82911a62.png",
        "http://localhost:1337/uploads/Project_Thumbs_Grubbr_786cc928e9.png"
    ])

    function switchImage() {
        console.log('currentImage:', currentImage)
        if (currentImage < images.length - 1) {
            setCurrentImage(prevState => prevState + 1);
          } else {
            setCurrentImage(0);
          }
          return currentImage;
    }

    useEffect(()=> {
        setInterval(()=>{
            switchImage()
        }, 3000)
    }, [])

    console.log(images, currentImage)

    return (
        <div>
            {images && <Image src={images[currentImage]} alt="Project slideshow" layout='fill'/>}
        </div>
    )
}