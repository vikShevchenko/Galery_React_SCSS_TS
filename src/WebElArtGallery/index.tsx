import { useState } from "react";
import { MainPhoto } from "./MainPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";
import { Photo } from "./types";

import style from "./index.module.scss"


interface WebArtGalleryProps{
photos: Photo[];
}


export const WebArtGallery: React.FC<WebArtGalleryProps> = ({
    photos,
}) => {
if(!photos.length){
    return null
}

const [indexActivePhoto, setIndexActivePhoto] = useState(0)
const activePhoto = photos[indexActivePhoto]
const prevPhoto = photos[indexActivePhoto -1]
const nextPhoto = photos[indexActivePhoto +1]

return (
    <div className={style.webelartGallery}>
        <div className={style.webelartGalleryContainer}>

            <MainPhoto 
            prevPhoto={prevPhoto}
            activePhoto={activePhoto}
            nextPhoto={nextPhoto}
            />

            <Navigation className={style.webelartGalleryNavigation}
            disabledPrev={!prevPhoto}
            disabledNext={!nextPhoto}

            onPrevClick={()=> {
                setIndexActivePhoto(indexActivePhoto - 1)
            }}
            onNextClick={()=> {
                setIndexActivePhoto(indexActivePhoto + 1)
            }}
            />
        </div>

        <PreviewGallery 
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.webelartGalleryPreviewList}
        />
        
        </div>
)
}