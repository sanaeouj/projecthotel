import React from 'react';
import loadingGif from "../../utils/images/gif/loading-arrow.gif";

const index = () => {
    return (
    <div className="loading">
      <h4>rooms data loading....</h4>
      <img src={loadingGif} alt="loading..." />
    </div>
    )
}

export default index;
