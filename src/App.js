import React, { useState } from 'react';
import Header from './Components/Header';
import Grid from './Components/Grid';

function App() {
  const [cells, setCells] = useState(Array.from({ length: 81 }, (v, i) => i));

  return (
    <div className='main-container'>
      <Header />
      <Grid cells={cells} />
    </div>
  );
}

export default App;
