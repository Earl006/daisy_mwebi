import React, { useState } from 'react';

const initialFormData = {
name: '',
age: '',
review: '',
};

const LeaveReviewForm = ({ onSubmit, setShowLeaveReview, handleCancel }) => {
const [formData, setFormData] = useState(initialFormData);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
e.preventDefault();
onSubmit(formData);
};

return (
<form onSubmit={handleSubmit}>
<div className="mb-4">
<label htmlFor="name" className="block text-sm font-semibold mb-2">
Name:
</label>
<input
type="text"
id="name"
name="name"
value={formData.name}
onChange={handleInputChange}
className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
/>
</div>
<div className="mb-4">
<label htmlFor="age" className="block text-sm font-semibold mb-2">
Age:
</label>
<input
type="text"
id="age"
name="age"
value={formData.age}
onChange={handleInputChange}
className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
/>
</div>
<div className="mb-4">
<label htmlFor="review" className="block text-sm font-semibold mb-2">
Review:
</label>
<textarea
id="review"
name="review"
value={formData.review}
onChange={handleInputChange}
className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
/>
</div>
<div className="flex justify-between items-center">
<button
type="submit"
className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
>
Submit Review
</button>
<button
type="button"
className="text-white bg-red-600 py-2 px-4 rounded-full hover:bg-red-300 focus:outline-none focus:shadow-outline-red"
onClick={() => handleCancel()}
>
Cancel
</button>
</div>
</form>
);
};

const LeaveReview = () => {
const [successMessage, setSuccessMessage] = useState('');
const [showLeaveReview, setShowLeaveReview] = useState(true);
const [showOverlay, setShowOverlay] = useState(true); 

const handleSubmitForm = async (formData) => {
  try {
    const response = await fetch('http://localhost/daisy_mwebi/src/assets/leaveReview.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Review submitted successfully!');
      setSuccessMessage('Review submitted successfully!');
      setShowLeaveReview(false);
      setShowOverlay(false);
    } else {
      console.error('Error submitting review.');
      
    }
  } catch (error) {
    console.error('Error:', error);
    
  }
};
const handleCancel = () => {
  setShowLeaveReview(false);
  setShowOverlay(false); 
  window.location.reload();

};
return (
<div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
<h1 className="text-center text-3xl mt-8 text-gray-800">Leave a Review</h1>
<div className="h-1.5 w-10 bg-yellow-500 mx-auto mt-4 mb-8" />

{successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

{showLeaveReview && <LeaveReviewForm onSubmit={handleSubmitForm} setShowLeaveReview={setShowLeaveReview} handleCancel={handleCancel}/>}
</div>
);
};

export default LeaveReview;
