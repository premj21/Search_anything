import React from 'react';

function Results(props) {
  const lk =`https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <div>
      <img src={lk} alt="notiong"/>      
    </div>
  );
}

export default Results;