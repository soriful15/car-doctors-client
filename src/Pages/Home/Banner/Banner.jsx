import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
// import banner5 from '../../../assets/images/banner/5.jpg'
// import banner6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-14 ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-2xl " />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
            <h2 className='text-xl lg:text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
            <p className='lg:text-2xl font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='md:flex md:gap-5'>
              <button className="btn btn-active btn-primary ">Discover More</button>
              <button className="btn btn-outline btn-success ml-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle ">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
          <h2 className='text-xl lg:text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
            <p className='lg:text-2xl font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='md:flex md:gap-5'>
              <button className="btn btn-active btn-primary ">Discover More</button>
              <button className="btn btn-outline btn-success ml-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
          <h2 className='text-xl lg:text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
            <p className='lg:text-2xl font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='md:flex md:gap-5'>
              <button className="btn btn-active btn-primary ">Discover More</button>
              <button className="btn btn-outline btn-success ml-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-2xl" />
        <div className="absolute flex items-center h-full  gap-5 transform  left-0  top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-2xl">
          <div className='space-y-7 md:w-1/2 md:pl-12 pl-5 '>
          <h2 className='text-xl lg:text-6xl font-bold text-white'>Affordable Price For Car Servicing </h2>
            <p className='lg:text-2xl font-normal text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='md:flex md:gap-5'>
              <button className="btn btn-active btn-primary ">Discover More</button>
              <button className="btn btn-outline btn-success ml-2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>



  );
};

export default Banner;