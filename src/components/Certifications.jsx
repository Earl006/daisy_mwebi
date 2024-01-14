import React from 'react';

function Certifications() {
  const certificationsData = [
    {
      title: 'Masters of Social Work',
      provider: 'McMaster University',
      date: 'October 2012',
      license_no: '818795',
    }
  ];

  return (
    <div className="bg-gray-100 font-sans py-8 px-4 md:px-8">
      <h1 id='certifications' className="text-center text-3xl mt-8 text-gray-800">Certifications</h1>
      <div className="h-1 w-16 bg-yellow-500 mx-auto mt-4 mb-8" />
      <div className="max-w-4xl mx-auto mt-8">
        {certificationsData.map((certification, index) => (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" key={index}>
            <h2 className="text-xl font-bold text-gray-800">{certification.title}</h2>
            <div className="flex items-center mt-2">
              <span className="text-gray-600">{certification.provider}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">{certification.date}</span>
            </div>
            <p className="text-gray-700 mt-4">License Number: {certification.license_no}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
