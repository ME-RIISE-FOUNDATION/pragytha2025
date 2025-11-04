import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const windStreakCount = 80;
  const windStreaks = Array.from({ length: windStreakCount }).map((_, i) => {
    const verticalPosition = Math.random() * 100;
    const style = {
      top: `${verticalPosition}vh`,
      width: `${Math.random() * 75 + 50}px`,
      height: `${Math.random() * 1.5 + 0.5}px`,
      animationDuration: `${Math.random() * 2 + 1.5}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
    return <div key={i} className="wind-streak" style={style}></div>;
  });

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-900 text-gray-100 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      <div className="absolute inset-0 pointer-events-none z-0">{windStreaks}</div>

      <style>{`
        .wind-streak {
          position: absolute;
          left: -150px;
          background: linear-gradient(to right, transparent, rgba(215, 238, 247, 0.93));
          border-radius: 50%;
          opacity: 0;
          animation-name: whistle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes whistle {
          0% { transform: translateX(0) translateY(0) scaleX(0.1); opacity: 0; }
          15% { transform: translateX(15vw) translateY(-2px) scaleX(0.7); opacity: 0.8; }
          50% { transform: translateX(50vw) translateY(2px) scaleX(1); opacity: 1; }
          85% { transform: translateX(85vw) translateY(-1px) scaleX(0.7); opacity: 0.8; }
          100% { transform: translateX(105vw) translateY(0) scaleX(0.1); opacity: 0; }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-6xl font-mon">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Get In Touch <br /> with our Organizers!
            </h1>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-8">
              Have questions or ideas? We'd love to hear from you. Follow our social channels to stay updated or contact our organizers directly.
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-semibold tracking-wider mb-4 uppercase text-slate-400">
                Follow Us
              </h2>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/me_riise?igsh=MXZxcm1tem1oYjBxaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-pink-500/30 hover:border-pink-500 transition-all duration-300"
                >
                  <FaInstagram className="text-pink-400 text-2xl" />
                </a>

                <a
                  href="https://youtube.com/@me-riise1750?si=b-mFz6kHMJV6wyVn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-red-500/30 hover:border-red-500 transition-all duration-300"
                >
                  <FaYoutube className="text-red-500 text-2xl" />
                </a>

                <a
                  href="https://www.linkedin.com/company/meriisefoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-600 transition-all duration-300"
                >
                  <FaLinkedin className="text-blue-500 text-2xl" />
                </a>

                <a
                  href="https://www.meriise.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:bg-white/30 hover:border-white transition-all duration-300"
                >
                  <FaGlobe className="text-gray-200 text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-black/40">
            <h2 className="text-2xl font-semibold text-white mb-8">Organizer Contacts</h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center">
                  <span className="text-slate-400 text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Aviksha Kavya Gowda</h3>
                  <a href="tel:+917353097151" className="text-gray-300 hover:text-blue-400 transition">
                    +91 7353097151
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 ">
                <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center">
                  <span className="text-slate-400 text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Pragna Gowda</h3>
                  <a href="tel:+918123820375" className="text-gray-300 hover:text-blue-400 transition">
                    +91 9108955001
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 ">
                <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center">
                  <span className="text-slate-400 text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1 text-white">Bilvateja H Y</h3>
                  <a href="tel:+918123820375" className="text-gray-300 hover:text-blue-400 transition">
                    +91 8123820375
                  </a>
                </div>
              </div>

<div className="flex flex-col space-y-4 font-mon">
  <div className="flex items-start space-x-4">
    <div className="w-14 h-14 rounded-full bg-slate-800/30 border border-slate-700/50 flex items-center justify-center flex-shrink-0">
      <span className="text-slate-400 text-2xl">📍</span>
    </div>
    <div>
      <h3 className="font-semibold text-xl mb-1 text-white">Venue</h3>
      <a
        href="https://www.google.com/maps/search/?api=1&query=ME-RIISE+Foundation,+Malnad+College+of+Engineering,+Hassan,+Karnataka+573201"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
      >
        Malnad College of Engineering <br />
        ME-RIISE FOUNDATION <br />
        Hassan, Karnataka – 573201
      </a>
    </div>
  </div>

  <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-700 shadow-md mt-4">
  <iframe
    title="ME-RIISE Foundation Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.194685958256!2d76.1032187!3d13.0232709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba549ca1cd604cf%3A0xd358cf690a1efdfb!2sME-RIISE!5e0!3m2!1sen!2sin!4v1760772177492!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;