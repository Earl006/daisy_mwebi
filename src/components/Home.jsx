import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import BookSession from './BookSession';

function Home() {
  const [showBookSession, setShowBookSession] = useState(false);

  const handleBookSessionClick = () => {
    setShowBookSession(true);
  };

  const handleBackButtonClick = () => {
    setShowBookSession(false);
  };

  return (
    <div id='main' className="relative min-h-screen w-screen overflow-hidden bg-gray-100">
      {showBookSession ? (
        <BookSession onBackButtonClick={handleBackButtonClick} />
      ) : (
        <>
          
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-28 w-28 rounded-full overflow-hidden z-15">
            <img
              className="h-full w-full object-cover object-center"
              src="src/assets/img/profile.jpeg"
              alt="Profile"
            />
          </div>

          {/* <img
            className='absolute top-0 left-0 w-full h-full object-cover object-center z-0'
            src='src/assets/img/wl1.jpg'
            alt='Background'
          /> */}

          <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl mx-auto text-gray-700">
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-bold " style={{ fontFamily: 'Signika Negative, sans-serif' }}>
          Meet Dr. Daisy Mwebi,
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-justify mb-8">
          Greetings, fellow Earthlings! I'm Dr. Daisy Mwebi, your certified happiness engineer and resident wizard of well-being. Imagine a place where therapy sessions feel like stepping into a confetti-filled adventure – that's exactly what you get when you're under the magical guidance of yours truly.
        </p>

            {/* <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">I am Daisy Mwebi</h1>
              <p className="text-xl mb-4">I am a Social Worker</p>
              <h2 className="text-xl lg:text-4xl italic text-orange">
                "Unlock Your Potential: Transforming Lives, One Session at a Time."
              </h2> */}
              <div className="flex items-center justify-center mt-4">
                <a href="#contact">
              <button
                // onClick={handleBookSessionClick}
                className="bg-orange-600 text-white py-2 px-4 rounded-full text-white"
              >
                Book a Session
              </button>
              </a>
              </div>
              <div className="flex items-center justify-center mt-4">
                <a href="https://m.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="cursor-pointer text-2xl lg:text-4xl mr-4" size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="cursor-pointer text-2xl lg:text-4xl mr-4" size={20} />
                </a>
                <a href="https://wa.me/+1 (647) 573-7106" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="cursor-pointer text-2xl lg:text-4xl mr-4" size={20} />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="cursor-pointer text-2xl lg:text-4xl mr-4" size={20} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
