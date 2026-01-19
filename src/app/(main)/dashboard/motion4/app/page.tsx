"use client"
import Image from 'next/image'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
const ImageCarousel = () => {
     const [emblaRef] = useEmblaCarousel({
     loop: true,
     align: 'center',
     skipSnaps: false,
     });
    const images = [
     'https://tomaslonnblad.github.io/1.jpg',
     'https://tomaslonnblad.github.io/2.jpg',
     'https://tomaslonnblad.github.io/3.jpg',
     'https://tomaslonnblad.github.io/4.jpg',
     ];
      return (
         <div className="embla" ref={emblaRef}>
           <div className="embla__container">
           {images.map((image, index) => (
             <div key={index} className="embla__slide">
               <img
               src={image} 
               alt={`Slide ${index + 1}`} 
               className="embla__slide__img" 
               />
             </div>
           ))}
           </div>
         </div>
       );
};
export default ImageCarousel;