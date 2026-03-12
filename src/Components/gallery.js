import React from "react";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const galleryImages = [
  { src: "./beach-camping-balapitiya1.jpg", alt: "Beach Camping Balapitiya" },
  { src: "./beach-camping-balapitiya2.jpg", alt: "Beach Camping Balapitiya 2" },
  { src: "./madu-river-safari1.jpg",        alt: "Madu River Safari" },
  { src: "./madu-river-safari2.jpg",        alt: "Madu River Safari 2" },
  { src: "./wild-camping-madoowa1.jpg",     alt: "Wild Camping Madoowa" },
  { src: "./wild-camping-madoowa2.jpg",     alt: "Wild Camping Madoowa 2" },
  { src: "./madu-river-safari3.jpg",        alt: "Madu River Safari 3" },
  { src: "./beach-camping-balapitiya3.jpg", alt: "Beach Camping Balapitiya 3" },
  { src: "./madu-river-safari4.jpg",        alt: "Madu River Safari 4" },
];

function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Outfit:wght@300;400;500&display=swap');

        .gallery-section {
          background: #060d1a;
     
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .gallery-section::before {
          content: '';
          position: absolute;
          top: -160px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(252,185,0,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
        }

        .gallery-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.8rem;
        }

        .gallery-tag::before,
        .gallery-tag::after {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1.5px;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          border-radius: 2px;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: unset;
        }

        .gallery-title {
          font-family: 'Cormorant Garamond', serif;
          color: #dce8ff;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 600;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .gallery-subtitle {
          color: rgba(180,200,240,0.45);
          font-size: 0.9rem;
          font-weight: 300;
          margin-top: 0.6rem;
        }

        .gallery-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .gallery-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(70,120,220,0.12);
          cursor: pointer;
          aspect-ratio: 1 / 1;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }

        .gallery-item:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
          aspect-ratio: unset;
        }

        .gallery-item:hover {
          border-color: rgba(252,185,0,0.3);
          transform: scale(1.02);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(252,185,0,0.15);
          z-index: 2;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.07);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6,13,26,0.7) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          pointer-events: none;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fcb900, #ff8c00);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #060d1a;
          font-size: 1rem;
          font-weight: 700;
          box-shadow: 0 4px 16px rgba(252,185,0,0.4);
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .gallery-item:nth-child(1) {
            grid-column: span 1;
            grid-row: span 1;
            aspect-ratio: 1 / 1;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }
        }
      `}</style>

      <section className="gallery-section">
        <div className="gallery-header">
          <p className="gallery-tag">Photo Gallery</p>
          <h2 className="gallery-title">Captured in the Wild</h2>
          <p className="gallery-subtitle">Click any photo to explore the full experience</p>
        </div>

        <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]}>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <a href={img.src} key={index} className="gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-icon">⤢</div>
                </div>
              </a>
            ))}
          </div>
        </LightGallery>
      </section>
    </>
  );
}

export default Gallery;