import React, { useState } from 'react';
import Camera from '../Camera/index';

import styled from 'styled-components';

const CameraSection = ({
  vehicleType,
  isCameraOpen,
  vehicleAngle,
  closeCamera,
}) => {
  const closeCameraSection = () => {
    closeCamera();
  };

  return (
    <RootStyled style={{ display: isCameraOpen ? 'initial' : 'none' }}>
      {isCameraOpen && (
        <div className="camera-container">
          <Camera vehicleAngle={vehicleAngle} vehicleType={vehicleType} />
          <div>
            {/* <input type='file' accept='image/*' capture='filesystem' /> */}
            <div className='closeCamera' onClick={closeCameraSection}>
              X
            </div>
          </div>
        </div>
      )}
    </RootStyled>
  );
};

const RootStyled = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  overflow: hidden;

  .closeCamera {
    font-size: 24px;
    color: white;
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 999;
  }

  .camera-container {
    height: 100%;
    @media (orientation: landscape) {
      height: 100vh !important;
    }
  }
`;

export default CameraSection;
