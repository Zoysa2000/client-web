
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Component2 = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="./image07.jpg"
      alt="slide-1"
      className="carousel-img p-1"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="./image02.jpg"
      alt="slide-2"
      className="carousel-img p-1"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="./image16.jpg"
      alt="slide-3"
      className="carousel-img p-1"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="./image04.jpg "
      alt="slide-4"
      className="carousel-img p-1"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="./image06.jpg "
      alt="slide-5"
      className="carousel-img p-1"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src="./p3.png"
      alt="slide-3"
      className="carousel-img p-1"
      onDragStart={handleDragStart}
      role="presentation"
    />,
   
   
  ];

  const responsive = {
    0: { items: 1 },     
    576: { items: 2 },  
    768: { items: 3 },   
    992: { items: 4 },  
    1200: { items: 4 },  
  };

  return (
    <div className="mt-5 p-3">
<AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      autoPlayInterval={1500}
      infinite
      disableButtonsControls
      disableDotsControls={false}
    />
    </div>
    
  );
};

export default Component2;
