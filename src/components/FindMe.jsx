import React from 'react';
import { MdVideocam, MdPhone } from 'react-icons/md'; // Import icons from the 'react-icons/md' library
import { FaGoogle } from 'react-icons/fa';
const FindMe = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-8 text-gray-800" id="location">Find Me</h1>
      <div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />

        <div className="flex justify-center items-center h-full">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md mr-4">
            <MdVideocam className="mr-2" /> Zoom Meeting
          </button>
           <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-md mr-4">
            <FaGoogle className="mr-2" /> Google Meet
          </button> 
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
            <MdPhone className="mr-2" /> Phone Call
          </button>
        </div>
    </div>
  );
};

export default FindMe;
