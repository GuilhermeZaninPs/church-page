import { Carousel } from "flowbite-react";



export const CarouselImage = () => {
  
  return (
    
      <div className="h-[70vh]  !rounded-t-none">
        <Carousel slideInterval={3000} indicators={false}>
          <img
            src="/test.jpg"
            alt="..."
            className="object-cover"
          />
          <img
            src="/test1.jpg"
            alt="..."
          />
          <h1 className="bg-black text-white text-center h-full"> Alerta</h1>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    
  );
};

export default CarouselImage;
