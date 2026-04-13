import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ImagesCarousel = () => {
  const handleDragStart = (e) => e.preventDefault();

  const slides = [
    { src: "./image07.jpg", alt: "slide-1" },
    { src: "./image02.jpg", alt: "slide-2" },
    { src: "./image16.jpg", alt: "slide-3" },
    { src: "./image04.jpg", alt: "slide-4" },
    { src: "./image06.jpg", alt: "slide-5" },
    { src: "./p3.png",      alt: "slide-6"},
  ];

  const items = slides.map((slide, i) => (
    <div className="ci-item-wrap" key={i}>
      <div className="ci-item">
        <img
          src={slide.src}
          alt={slide.alt}
          className="ci-img"
          onDragStart={handleDragStart}
          role="presentation"
        />
        <div className="ci-overlay">
          <span className="ci-label">{slide.label}</span>
          <span className="ci-zoom">⤢</span>
        </div>
      </div>
    </div>
  ));

  const responsive = {
    0:    { items: 1 },
    576:  { items: 2 },
    768:  { items: 3 },
    992:  { items: 4 },
    1200: { items: 4 },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@300;400;500&display=swap');

        .ci-section {
          background: #060d1a;
          padding: 6rem 0 5rem;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        /* ambient glows */
        .ci-section::before {
          content: '';
          position: absolute;
          top: -150px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .ci-section::after {
          content: '';
          position: absolute;
          bottom: -80px; right: -60px;
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(30,80,180,0.08) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ── Header ── */
        .ci-header {
          text-align: center;
          margin-bottom: 3.5rem;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        .ci-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.7rem;
        }

        .ci-tag::before, .ci-tag::after {
          content: '';
          display: inline-block;
          width: 24px; height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        .ci-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          margin: 0 0 0.5rem;
          letter-spacing: 0.01em;
        }

        .ci-subtitle {
          color: rgba(180,200,240,0.4);
          font-size: 0.88rem;
          font-weight: 300;
        }

        /* ── Counter strip ── */
        .ci-counter-strip {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        .ci-counter-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .ci-counter-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .ci-counter-lbl {
          color: rgba(180,200,240,0.4);
          font-size: 0.7rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ci-counter-sep {
          width: 1px;
          height: 36px;
          background: rgba(70,120,220,0.2);
          align-self: center;
        }

        /* ── Carousel wrapper with edge fades ── */
        .ci-carousel-wrap {
          position: relative;
          z-index: 1;
        }

        .ci-carousel-wrap::before,
        .ci-carousel-wrap::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 100px;
          z-index: 3;
          pointer-events: none;
        }

        .ci-carousel-wrap::before {
          left: 0;
          background: linear-gradient(to right, #060d1a 0%, transparent 100%);
        }

        .ci-carousel-wrap::after {
          right: 0;
          background: linear-gradient(to left, #060d1a 0%, transparent 100%);
        }

        /* ── Each slide ── */
        .ci-item-wrap {
          padding: 0.5rem 0.5rem 1.5rem;
        }

        .ci-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(70,120,220,0.14);
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          cursor: grab;
        }

        .ci-item:hover {
          border-color: rgba(252,185,0,0.3);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(252,185,0,0.12);
          transform: translateY(-5px);
        }

        .ci-item:active { cursor: grabbing; }

        .ci-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .ci-item:hover .ci-img {
          transform: scale(1.07);
        }

        /* Hover overlay */
        .ci-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,13,26,0.85) 0%, rgba(6,13,26,0.1) 55%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 0.9rem 1rem;
        }

        .ci-item:hover .ci-overlay {
          opacity: 1;
        }

        .ci-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #dce8ff;
          letter-spacing: 0.05em;
        }

        .ci-zoom {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #060d1a;
          font-size: 0.85rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        /* ── Alice dots ── */
        .alice-carousel__dots {
          margin-top: 1.8rem;
          display: flex;
          justify-content: center;
          gap: 6px;
        }

        .alice-carousel__dots-item:not(.__custom) {
          width: 7px;
          height: 7px;
          background: rgba(255,255,255,0.14);
          border-radius: 50%;
          transition: all 0.3s;
          margin: 0 !important;
        }

        .alice-carousel__dots-item:not(.__custom).__active {
          width: 24px;
          border-radius: 4px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
        }

        .alice-carousel__dots-item:not(.__custom):hover {
          background: rgba(252,185,0,0.35);
        }

        /* ── Thumbnail strip ── */
        .ci-thumbs {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          margin-top: 1.8rem;
          padding: 0 1.5rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .ci-thumb {
          width: 52px;
          height: 52px;
          border-radius: 10px;
          object-fit: cover;
          border: 2px solid rgba(70,120,220,0.15);
          cursor: pointer;
          transition: border-color 0.25s, transform 0.2s, box-shadow 0.2s;
          opacity: 0.55;
        }

        .ci-thumb:hover,
        .ci-thumb.active {
          border-color: rgba(252,185,0,0.55);
          opacity: 1;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(252,185,0,0.2);
        }
      `}</style>

      <section className="ci-section">

        {/* Header */}
        <div className="ci-header">
          <p className="ci-tag">Our Gallery</p>
          <h2 className="ci-title">Moments from the Wild</h2>
          <p className="ci-subtitle">Drag to explore — hover to preview</p>
        </div>

        {/* Carousel */}
        <div className="ci-carousel-wrap">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            autoPlay
            autoPlayInterval={1500}
            infinite
            disableButtonsControls
            disableDotsControls={false}
            onSlideChanged={(e) => setActiveIndex(e.item)}
          />
        </div>
 </section>
    </>
  );
};

export default ImagesCarousel;