import { Carousel } from "flowbite-react";
import Image from "next/image";



export const CarouselImage = () => {
  
  return (
    
      <div className="h-[70vh]  !rounded-t-none">
        <Carousel slideInterval={3000} indicators={false}>
          <Image
            src="/test.jpg"
            alt="..."
            className="object-cover"
            width={900}
            height={70}
            layout="fixed"
          />
          <Image
            src="/test1.jpg"
            alt="..."
            width={900}
            height={70}
            layout="fixed"
          />
          {/* <h1 className="bg-black text-white text-center h-full"> Alerta</h1>
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            width={900}
            height={70}
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            width={300}
            height={100}
          /> */}
        </Carousel>
      </div>
    
  );
};

export default CarouselImage;
