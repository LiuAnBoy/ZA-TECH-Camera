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
        <div>
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

  .closeCamera {
    font-size: 24px;
    color: white;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
`;

export default CameraSection;
