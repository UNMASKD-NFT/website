import React from 'react';
import Slider from '../components/Slider';

function Home() {
  return (
    <div className='container'>
      <h1 className='text-center text-big'>U N M A S K D</h1>
      <p className='text-center text-muted'>800+ random NFTs</p>
      <button
        className='buy-button'
        onClick={() =>
          window.open('https://opensea.io/collection/unmaskd', '_blank')
        }
      >
        buy now!
      </button>
      <Slider />
    </div>
  );
}

export default Home;
