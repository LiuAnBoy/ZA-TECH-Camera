import React, { useRef } from 'react';
import styled from 'styled-components';

const RootStyled = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;

  .picture-container {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
  }

  .pic-button-group {
    position: absolute;
    bottom: 50px;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .pic-accept {
    color: white;
    font-size: 18px;
  }

  .pic-recap {
    color: white;
    font-size: 18px;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;

const PictureSection = ({
  cardImage,
  onPictureClose,
  vehicleType,
  vehicleAngle,
}) => {
  const callBackObj = {
    type: vehicleType,
    angle: vehicleAngle,
    blob: cardImage,
  };

  const onPictureSend = () => {
    console.log(callBackObj);
  };

  return (
    <RootStyled>
      <div className='picture-container'>
        <img src={cardImage && URL.createObjectURL(cardImage)} />
      </div>

      <div className='pic-button-group'>
        <div className='pic-accept' onClick={onPictureSend}>
          Upload
        </div>
        <div className='pic-recap' onClick={onPictureClose}>
          Retake
        </div>
      </div>
    </RootStyled>
  );
};

export default PictureSection;
