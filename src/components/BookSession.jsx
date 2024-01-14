import React, { useState } from 'react';

const BookSession = ({ onBackButtonClick }) => {
  const [selectedSessionType, setSelectedSessionType] = useState('');

  const handleSessionTypeChange = (sessionType) => {
    setSelectedSessionType(sessionType);
  };

  return (
    <div className="container mx-auto mt-8 bg-gray-100 p-8 max-h-7xl">
      <div className="flex justify-end">
        <button
          onClick={onBackButtonClick}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
      <h2 className="text-3xl font-semibold mb-4">Schedule a Session</h2>
      <div className="flex space-x-4">
        <button
          onClick={() => handleSessionTypeChange('individual')}
          className={`${
            selectedSessionType === 'individual'
              ? 'bg-orange-600'
              : 'bg-orange-300'
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          Individual Therapy
        </button>
        <button
          onClick={() => handleSessionTypeChange('family')}
          className={`${
            selectedSessionType === 'family' ? 'bg-blue-500' : 'bg-orange-300'
          } hover:bg-orange-600 text-white font-bold py-2 px-4 rounded`}
        >
          Family/Couple Therapy
        </button>
        <button
          onClick={() => handleSessionTypeChange('supervision')}
          className={`${
            selectedSessionType === 'supervision'
              ? 'bg-orange-600'
              : 'bg-orange-300'
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
        >
          Individual Supervision
        </button>
      </div>
      {/* Additional form elements based on the selected session type can be added here */}
    </div>
  );
};

export default BookSession;
