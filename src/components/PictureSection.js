import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import CheckModal from './CheckModal';

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

  .picture-container {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pic-button-group {
    position: absolute;
    bottom: 20px;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .pic-accept {
    color: white;
    font-size: 20px;
    background-color: #ff8c1a;
    padding: 10px 28px;
    border-radius: 8px;
  }

  .pic-recap {
    color: white;
    font-size: 20px;
    background-color: #ff8c1a;
    padding: 10px 28px;
    border-radius: 8px;
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
  handleCameraClose,
  vehicleType,
  vehicleAngle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quality, setQuality] = useState();
  // const callBackObj = {
  //   // type: vehicleType,
  //   // angle: vehicleAngle,
  //   fileName: `${vehicleType}-${vehicleAngle}.jpeg`,
  //   blob: cardImage,
  // };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const onPictureSend = async () => {
    const data = new FormData();
    data.append('', cardImage);

    // const obj = {
    //   fileName: `${vehicleType}-${vehicleAngle}.jpeg`,
    //   image: cardImage,
    // };

    try {
      const res = await axios.post('/api/image', data, {
        headers: {
          Authorization: 'Basic Ymx1ci10ZXN0OnRlc3Rlci1ibHVy',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      setQuality(res.data[0].blur);

      if (res.data[0].blur === 1) {
        return res.data;
      }
      handleModalOpen();
    } catch (error) {
      console.log(error.message);
    }
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

      <CheckModal
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        handlePictureClose={onPictureClose}
        Quality={quality}
        handleCameraClose={handleCameraClose}
      />
    </RootStyled>
  );
};

export default PictureSection;
