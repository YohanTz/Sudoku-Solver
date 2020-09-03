import React from 'react';
import '../Styles/Grid.css';

const Grid = ({ cells }) => {
  return (
    <div className='grid'>
      {cells.map((cell, i) => (
        <div className='cell' key={i}>
          {cell % 5 == 0 || cell % 7 == 0 ? cell % 9 : ''}
        </div>
      ))}
    </div>
  );
};

export default Grid;
