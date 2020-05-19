import React from "react";
import heartLoadPic from "../../assets/heart-load.png";

const LoadingModal = () => {
  return (
    <div
      className="myModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
    >
      <div className="modal_dialog">
        <div className="modal_my_content">
          Loading content...
          <img src={heartLoadPic} alt="loading" className="load_img" />
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
