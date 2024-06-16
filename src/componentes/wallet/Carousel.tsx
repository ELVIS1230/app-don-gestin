import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const images = require.context('/public/images', false, /\.(jpg|jpeg|png)$/);
  const imageKeys = images.keys();

  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} 
      stopOnHover={false}
    >
      {imageKeys.map((imageKey, index) => (
        <div key={index}>
          <Image src={images(imageKey).default} 
          alt={`Imagen ${index}`} 
          className="object-contain w-64 h-64 rounded-md"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
