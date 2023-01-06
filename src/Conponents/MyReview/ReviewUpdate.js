import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdate = () => {
  const {data}=useLoaderData()

  const {reviewText, productName,ratings,_id}= data;

  return (
    <div>
      review update
    </div>
  );
};

export default ReviewUpdate;