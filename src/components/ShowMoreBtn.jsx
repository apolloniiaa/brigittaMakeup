// ShowMoreButton.jsx

import React from 'react';

const ShowMoreButton = ({ onClick }) => {
  return (
    <div className='show-more-btn' onClick={onClick}>
      Mutass többet
    </div>
  );
};

export default ShowMoreButton;
