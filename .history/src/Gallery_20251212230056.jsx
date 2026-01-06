// import React from 'react';

// const Gallery = () => {
//   const galleryItems = [
//     { id: 1, title: "Inauguration Spark", image: "https://placehold.co/600x800/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 2, title: "Coding Arena", image: "https://placehold.co/600x600/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 3, title: "Robotic Marvels", image: "https://placehold.co/600x900/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 4, title: "Design Symposium", image: "https://placehold.co/600x700/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 5, title: "Workshop Insights", image: "https://placehold.co/600x600/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 6, title: "Hackathon Victory", image: "https://placehold.co/600x800/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 7, title: "Cultural Night Lights", image: "https://placehold.co/600x900/0f172a/00ffff?text=Pragyatha+'24" },
//     { id: 8, title: "Celebrating Winners", image: "https://placehold.co/600x700/0f172a/00ffff?text=Pragyatha+'24" },
//   ];

//   const customStyles = `
//     .masonry-gallery {
//       column-count: 3;
//       column-gap: 1.5rem;
//     }
//     .masonry-item {
//       display: inline-block;
//       width: 100%;
//       margin-bottom: 1.5rem;
//       break-inside: avoid;
//     }
//     @media (max-width: 1024px) {
//       .masonry-gallery {
//         column-count: 2;
//       }
//     }
//     @media (max-width: 640px) {
//       .masonry-gallery {
//         column-count: 1;
//       }
//     }
//   `;

//   return (
//     <div id="gallery" className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-white py-40 font-sans">
//       <style dangerouslySetInnerHTML={{ __html: customStyles }} />
//       <div className="container mx-auto px-6">

//         <div className="text-center mb-16">
//           <h1 className="font-bold text-4xl md:text-6xl tracking-widest mb-4 text-white"
//             style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)' }}>
//             PRAGYATHA '24
//           </h1>
//           <p className="text-blue-300 text-lg md:text-xl tracking-wider uppercase">
//             A Look Back at Our Moments
//           </p>
//         </div>

//         <div className="masonry-gallery">
//           {galleryItems.map((item) => (
//             <div key={item.id} className="masonry-item">
//               <div className="overflow-hidden rounded-lg border-2 border-blue-900/50 shadow-lg shadow-black/40">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-auto block"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useEffect, useRef } from "react";

/* -----------------------------------------
   REUSABLE EVENT SLIDER
------------------------------------------ */
const EventSlider = ({ images }) => {
  const sliderRef = useRef(null);
  let index = 0;

  useEffect(() => {
    const slider = sliderRef.current;

    const autoSlide = setInterval(() => {
      index = (index + 1) % images.length;
      slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(autoSlide);
  }, [images]);

  return (
    <div
      ref={sliderRef}
      className="
        w-full overflow-hidden whitespace-nowrap 
        rounded-xl border border-blue-900/40 shadow-md shadow-black/40
        scroll-smooth
      "
    >
      {images.map((img, i) => (
        <div key={i} className="inline-block w-full">
          <img
            src={img}
            alt=""
            className="
              w-full h-56 sm:h-64 md:h-72 lg:h-80 
              object-cover select-none
            "
          />
        </div>
      ))}
    </div>
  );
};

/* -----------------------------------------
   MAIN GALLERY PAGE
------------------------------------------ */
const Gallery = () => {
  const events = [
    {
      title: "AdMania",
      images: ["/ad1.jpg", "/ad2.jpg", "/ad3.jpg", "/ad4.jpg", "/ad5.jpg"],
    },
    {
      title: "UI/UX Hackathon",
      images: ["/ui1.jpg", "/ui2.jpg", "/ui3.jpg", "/ui4.jpg", "/ui5.jpg"],
    },
    {
      title: "Robotic Marvels",
      images: [
        "https://placehold.co/1200x600/0f172a/00ffff?text=Robotics+1",
        "https://placehold.co/1200x600/0f172a/00ffff?text=Robotics+2",
      ],
    },
    {
      title: "BlockCord",
      images: [
        "/block1.jpg",
        "/block2.jpg",
        "/block3.jpg",
        "/block4.jpg",
        "/block5.jpg",
      ],
    },
    {
      title: "Entrorphosis",
      images: ["/e1.jpg", "/e2.jpg", "/e3.jpg", "/e4.jpg", "/e5.jpg"],
    },
    {
      title: "Hackathon Victory",
      images: [
        "https://placehold.co/1200x600/0f172a/00ffff?text=Hackathon+1",
        "https://placehold.co/1200x600/0f172a/00ffff?text=Hackathon+2",
      ],
    },
  ];

  return (
    <div
      id="gallery"
      className="
        min-h-screen 
        bg-gradient-to-br from-gray-950 via-black to-blue-950 
        text-white py-24 md:py-32
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <h1
          className="
            text-center font-bold 
            text-4xl md:text-6xl tracking-widest mb-14
          "
          style={{
            textShadow:
              "0 0 20px rgba(0,255,255,0.6), 0 0 40px rgba(0,191,255,0.5)",
          }}
        >
          PRAGYATHA '24
        </h1>

        {/* Event Blocks */}
        <div className="space-y-20">
          {events.map((event, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-cyan-300">
                {event.title}
              </h2>
              <EventSlider images={event.images} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
