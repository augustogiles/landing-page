import React from 'react';
import './index.css';

function Loading( {show = true} ) {
  const LoadingAnimation = (
    <div id="preloader">
      <div className="spinner">
        <div className="uil-ripple-css">
          <div />
          <div />
        </div>
      </div>
    </div>
  )

  
  return show ? (LoadingAnimation) : (<></>);
}

export default React.memo(Loading);