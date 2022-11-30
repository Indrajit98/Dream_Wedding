import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";
import img4 from "../assets/gallery/gallery4.jpg";
import img5 from "../assets/gallery/gallery5.jpg";
import img6 from "../assets/gallery/gallery6.jpg";

const images = [img1,img2,img3,img4, img5, img6];

const PhotoGallery = () => {
  return (
    <div className="mb-20">
        <h1 className="md:text-5xl text-xl font-bold text-center md:pb-12 py-3 gap-4" >Lovely Moment Time</h1>
     <div>
     <PhotoProvider>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {images.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img className="w-full inline-block h-96 object-cover" src={item} alt="" />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
     </div>
    </div>
  );
};

export default PhotoGallery;
