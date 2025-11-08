// import React, { Suspense, useEffect, useState, useMemo } from "react";
// import Snowfall from "react-snowfall";
// import { Link } from 'react-router-dom';
// const ImageGallery = React.lazy(() => import("./components/ImageGallery"));

// const Home = () => {
//   const backgroundImageUrl = "/home_bg.jpg";
//   const [snowflakeCount, setSnowflakeCount] = useState(70);

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const targetDate = useMemo(() => new Date("2025-12-15T00:00:00"), []);
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const difference = targetDate - now;

//       if (difference <= 0) {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((difference / 1000 / 60) % 60);
//         const seconds = Math.floor((difference / 1000) % 60);
//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, [targetDate]);

//   useEffect(() => {
//     const updateSnowflakeCount = () => {
//       const width = window.innerWidth;
//       if (width < 480) setSnowflakeCount(25);
//       else if (width < 768) setSnowflakeCount(40);
//       else setSnowflakeCount(70);
//     };

//     updateSnowflakeCount();
//     window.addEventListener("resize", updateSnowflakeCount);
//     return () => window.removeEventListener("resize", updateSnowflakeCount);
//   }, []);

//   return (
//     <div className="relative overflow-hidden">
//       <Suspense fallback={null}>
//         <div className="fixed inset-0 pointer-events-none z-20 will-change-transform">
//           <Snowfall color="#dee4f0" snowflakeCount={snowflakeCount} speed={[0.5, 2]} />
//         </div>
//       </Suspense>

//       <section
//         id="home"
//         className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
//         style={{
//           backgroundImage: `url(${backgroundImageUrl})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>

//         <main className="relative z-10 px-2 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
//           <h1
//             className="font-got font-semibold text-gray-200 drop-shadow-lg text-center whitespace-nowrap
//               tracking-[0.25em] sm:tracking-[0.35em]
//               text-[clamp(1.8rem,7vw,6rem)] leading-tight
//               scale-x-[0.85] sm:scale-x-100 ocean-flicker"
//           >
//             PRAGYATHA'25
//           </h1>

//           <p className="font-mon mt-4 uppercase text-xs sm:text-sm md:text-lg lg:text-xl tracking-widest text-gray-400 text-center">
//             Proclaim Your Potential
//           </p>

        
//         </main>
//       </section>

//       <Suspense fallback={<div className="text-center text-gray-400 py-10 animate-pulse">Loading Gallery...</div>}>
//         <ImageGallery />
//       </Suspense>

//       <section id="about" className="min-h-screen bg-black text-white py-16 sm:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-10">
//           <header className="text-center mb-14 sm:mb-16">
//             <h1
//               className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4"
//               style={{
//                 textShadow:
//                   "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)",
//               }}
//             >
//               ABOUT US
//             </h1>
//             <p className="text-gray-300 text-base sm:text-lg md:text-xl tracking-wider uppercase">
//               Discover Our Story
//             </p>
//           </header>

//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 font-mon">
//               <div className="space-y-5 text-center sm:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-semibold tracking-wider uppercase mb-4">
//                   Welcome to Pragyatha '25
//                 </h2>
//                 <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//                   Pragyatha ’25 isn’t just an event — it’s a movement celebrating
//                   innovation, entrepreneurship, and the creative power of young
//                   minds. Organized by the ME-RIISE Foundation and Malnad College of
//                   Engineering, Hassan, it unites innovators, entrepreneurs, and
//                   technologists from across the nation.
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 sm:gap-6">
//                 {[{ value: "500+", label: "Participants" },
//                   { value: "5+", label: "Events" },
//                   { value: "3", label: "Days" },
//                   { value: "10+", label: "Colleges" }].map((item) => (
//                   <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:bg-white/10">
//                     <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{item.value}</div>
//                     <div className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">{item.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
//               {[{
//                 title: "Our Vision",
//                 text: `To engender industry ready graduates possessing magnificent skills
//                   in the arena of innovation and technological development of products/
//                   services.`
//               }, {
//                 title: "Our Mission",
//                 text: `To provide students with opportunities to showcase their skills,
//                   learn from industry experts, and collaborate on projects that make a
//                   real difference in the world.`
//               }].map((item) => (
//                 <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 font-mon transition-all duration-300 hover:bg-white/10">
//                   <h3 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-3 text-cyan-400">{item.title}</h3>
//                   <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.text}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6 sm:p-10 font-mon">
//               <h2 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-3">Ready to Join Us?</h2>
//               <p className="text-gray-300 mb-5 text-sm sm:text-base max-w-2xl mx-auto">
//                 Don't miss out on this incredible opportunity to showcase your talents
//                 and connect with like-minded individuals.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link
//                   to="/events"
//                   onClick={handleScrollToTop}
//                   className="px-6 sm:px-8 py-3 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase text-sm sm:text-base"
//                 >
//                   View Events
//                 </Link>

//                 <Link
//                   to="/contact"
//                   onClick={handleScrollToTop}
//                   className="px-6 sm:px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300 uppercase text-sm sm:text-base"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { Suspense, useEffect, useState, useMemo } from "react";
import Snowfall from "react-snowfall";
import { Link } from "react-router-dom";
const ImageGallery = React.lazy(() => import("./components/ImageGallery"));

const Home = () => {
  const backgroundImageUrl = "/home_bg.jpg";
  const [snowflakeCount, setSnowflakeCount] = useState(70);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 🎯 Countdown target date — starts Nov 28, 2025, at 4:00 PM
  const targetDate = useMemo(() => new Date("2025-11-28T16:00:00"), []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // ❄️ Adjust snowflake count responsively
  useEffect(() => {
    const updateSnowflakeCount = () => {
      const width = window.innerWidth;
      if (width < 480) setSnowflakeCount(25);
      else if (width < 768) setSnowflakeCount(40);
      else setSnowflakeCount(70);
    };

    updateSnowflakeCount();
    window.addEventListener("resize", updateSnowflakeCount);
    return () => window.removeEventListener("resize", updateSnowflakeCount);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Suspense fallback={null}>
        <div className="fixed inset-0 pointer-events-none z-20 will-change-transform">
          <Snowfall
            color="#dee4f0"
            snowflakeCount={snowflakeCount}
            speed={[0.5, 2]}
          />
        </div>
      </Suspense>

      {/* 🏠 HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>

        <main className="relative z-10 px-2 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
          <h1
            className="font-got font-semibold text-gray-200 drop-shadow-lg text-center whitespace-nowrap
              tracking-[0.25em] sm:tracking-[0.35em]
              text-[clamp(1.8rem,7vw,6rem)] leading-tight
              scale-x-[0.85] sm:scale-x-100 ocean-flicker"
          >
            PRAGYATHA'25
          </h1>

          <p className="font-mon mt-4 uppercase text-xs sm:text-sm md:text-lg lg:text-xl tracking-widest text-gray-400 text-center">
            Proclaim Your Potential
          </p>

          {/* ⏳ Countdown Timer */}
<div className="mt-10 flex justify-center items-center px-4">
  {/* Countdown Card */}
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 w-full max-w-lg text-center flex flex-col items-center">
    
    {/* Title */}
    <p className="text-cyan-400 text-base sm:text-lg md:text-xl uppercase tracking-[0.25em] mb-8 font-semibold leading-relaxed">
      The Throne<br className="sm:hidden" /> Awaits the Chosen
    </p>

    {/* Timer */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((unit) => (
        <div
          key={unit.label}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 sm:px-5 sm:py-5 transition-all duration-300 hover:bg-white/10 flex flex-col items-center justify-center"
        >
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-gray-300 uppercase tracking-widest text-xs sm:text-sm mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        </main>
      </section>

      {/* 🖼️ IMAGE GALLERY */}
      <Suspense
        fallback={
          <div className="text-center text-gray-400 py-10 animate-pulse">
            Loading Gallery...
          </div>
        }
      >
        <ImageGallery />
      </Suspense>

      {/* 📖 ABOUT SECTION */}
      <section id="about" className="min-h-screen bg-black text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <header className="text-center mb-14 sm:mb-16">
            <h1
              className="font-got text-4xl md:text-6xl lg:text-7xl tracking-widest mb-4"
              style={{
                textShadow:
                  "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)",
              }}
            >
              ABOUT US
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl tracking-wider uppercase">
              Discover Our Story
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 font-mon">
              <div className="space-y-5 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-wider uppercase mb-4">
                  Welcome to Pragyatha '25
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Pragyatha ’25 isn’t just an event — it’s a movement celebrating
                  innovation, entrepreneurship, and the creative power of young minds.
                  Organized by the ME-RIISE Foundation and Malnad College of Engineering, Hassan,
                  it unites innovators, entrepreneurs, and technologists from across the nation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: "500+", label: "Participants" },
                  { value: "5+", label: "Events" },
                  { value: "3", label: "Days" },
                  { value: "10+", label: "Colleges" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
                      {item.value}
                    </div>
                    <div className="text-gray-300 uppercase tracking-wider text-xs sm:text-sm">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  title: "Our Vision",
                  text: `To engender industry ready graduates possessing magnificent skills
                  in the arena of innovation and technological development of products/
                  services.`,
                },
                {
                  title: "Our Mission",
                  text: `To provide students with opportunities to showcase their skills,
                  learn from industry experts, and collaborate on projects that make a
                  real difference in the world.`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 font-mon transition-all duration-300 hover:bg-white/10"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-3 text-cyan-400">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white/5 border border-white/10 rounded-xl p-6 sm:p-10 font-mon">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-wider uppercase mb-3">
                Ready to Join Us?
              </h2>
              <p className="text-gray-300 mb-5 text-sm sm:text-base max-w-2xl mx-auto">
                Don't miss out on this incredible opportunity to showcase your talents
                and connect with like-minded individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  onClick={handleScrollToTop}
                  className="px-6 sm:px-8 py-3 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 font-semibold tracking-wide rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 uppercase text-sm sm:text-base"
                >
                  View Events
                </Link>

                <Link
                  to="/contact"
                  onClick={handleScrollToTop}
                  className="px-6 sm:px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300 uppercase text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
