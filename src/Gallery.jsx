import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: "Inauguration Spark", image: "https://placehold.co/600x800/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 2, title: "Coding Arena", image: "https://placehold.co/600x600/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 3, title: "Robotic Marvels", image: "https://placehold.co/600x900/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 4, title: "Design Symposium", image: "https://placehold.co/600x700/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 5, title: "Workshop Insights", image: "https://placehold.co/600x600/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 6, title: "Hackathon Victory", image: "https://placehold.co/600x800/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 7, title: "Cultural Night Lights", image: "https://placehold.co/600x900/0f172a/00ffff?text=Pragyatha+'24" },
    { id: 8, title: "Celebrating Winners", image: "https://placehold.co/600x700/0f172a/00ffff?text=Pragyatha+'24" },
  ];

  const customStyles = `
    .masonry-gallery {
      column-count: 3;
      column-gap: 1.5rem;
    }
    .masonry-item {
      display: inline-block;
      width: 100%;
      margin-bottom: 1.5rem;
      break-inside: avoid;
    }
    @media (max-width: 1024px) {
      .masonry-gallery {
        column-count: 2;
      }
    }
    @media (max-width: 640px) {
      .masonry-gallery {
        column-count: 1;
      }
    }
  `;

  return (
    <div id="gallery" className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-blue-950 text-white py-40 font-sans">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-6xl tracking-widest mb-4 text-white"
            style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)' }}>
            PRAGYATHA '24
          </h1>
          <p className="text-blue-300 text-lg md:text-xl tracking-wider uppercase">
            A Look Back at Our Moments
          </p>
        </div>

        <div className="masonry-gallery">
          {galleryItems.map((item) => (
            <div key={item.id} className="masonry-item">
              <div className="overflow-hidden rounded-lg border-2 border-blue-900/50 shadow-lg shadow-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;