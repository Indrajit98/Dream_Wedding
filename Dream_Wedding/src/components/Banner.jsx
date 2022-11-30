import React from "react";
import img1 from "../assets/sliderImage/slider1.jpg";
import img2 from "../assets/sliderImage/slider2.jpg";
import img3 from "../assets/sliderImage/slider3.jpg";
import "./Style/banner.css";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="mx-auto w-full banner-img">
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/4">
            <h2 className="md:text-5xl text-white font-bold text-center">
              Dream Wedding make your <br /> Wedding Perfectly
            </h2>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/3">
            <p className="md:text-2xl text-white lg:block hidden">
              if you are dreaming about getting married you are in the right
              place
            </p>
          </div>
          <div className="absolute flex md:inline-block hidden  justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a
              href="#slide3"
              className="btn btn-circle mr-3 bg-white border-none "
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white border-none">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="mx-auto w-full banner-img">
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/4">
            <h2 className="md:text-5xl text-white font-bold text-center">
              Dream Wedding make your <br /> Wedding Perfectly
            </h2>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/3">
            <p className="md:text-2xl text-white lg:block hidden">
              if you are dreaming about getting married you are in the right
              place
            </p>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 md:block hidden">
            <a
              href="#slide1"
              className="btn btn-circle mr-3 bg-white border-none "
            >
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white border-none">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="mx-auto w-full banner-img">
            <img src={img3} alt="" className="w-full" />
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/4">
            <h2 className="md:text-5xl text-white font-bold text-center">
              Dream Wedding make your <br /> Wedding Perfectly
            </h2>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-2/3">
            <p className="md:text-2xl text-white lg:block hidden">
              if you are dreaming about getting married you are in the right
              place
            </p>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 md:block hidden">
            <a
              href="#slide2"
              className="btn btn-circle mr-3 bg-white border-none "
            >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white border-none">
              ❯
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
