import React, { useState, useEffect } from 'react';

import AdExample1 from '../images/ad_example.jpg';
import AdExample2 from '../images/ad_example2.jpg';
import AdExample3 from '../images/ad_example3.jpg';

import ArrowRight from '../icons/arrow_right.svg';
import ArrowLeft from '../icons/arrow_left.svg';

const slides = [
   { id: 1, src: AdExample1},
   { id: 2, src: AdExample2},
   { id: 3, src: AdExample3},
];

const AdBannerSlider = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
   };

   const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
   };

   useEffect(() => {
      const interval = setInterval(nextSlide, 15000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className='ad_banner'>
         <div className='slider'>
            <div className='slider_arrows_container'>
               <div className='slider_arrow' onClick={prevSlide}>
                  <img src={ArrowLeft} alt='Стрелка влево' />
               </div>

               <div className='slider_arrow' onClick={nextSlide}>
                  <img src={ArrowRight} alt='Стрелка вправо' />
               </div>
            </div>

            <div className='slides' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
               {slides.map((slide) => (
                  <div className='slide' key={slide.id}>
                     <img
                        src={slide.src}
                        alt='Реклама'
                        className='ad_banner_image'
                     />
                  </div>
               ))}
            </div>
         </div>

         <div className='ad_text'>
            <p>Реклама</p>
         </div>
      </div>
   );
};

export default AdBannerSlider;