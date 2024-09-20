import React from 'react';
import ReviewCart from './ReviewCart';

const BikeReviews = ({ reviews }) => {
    
  return (
    <div className='container'>
        <h2 className='text-center my-4'>Customer Review</h2>
    <div className='row'>
      {reviews.map((review, index) => (
        <div className='col-12 col-md-6' key={index}>
          <ReviewCart review={review} />
        </div>
      ))}
    </div>
  </div>
  

  );
};

export default BikeReviews;
