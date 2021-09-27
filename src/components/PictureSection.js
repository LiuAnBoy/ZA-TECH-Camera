import axios from 'axios';
import React, { useState } from 'react';
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
  vehicleType,
  vehicleAngle,
}) => {
  const [dataURL, setDataURL] = useState();

  const callBackObj = {
    // type: vehicleType,
    // angle: vehicleAngle,
    fileName: `${vehicleType}-${vehicleAngle}.jpeg`,
    blob: cardImage,
  };

  const apiUrl = 'https://devision-test.xmine.com.tw/';

  const headers = {
    Authorization: 'Basic Ymx1ci10ZXN0OnRlc3Rlci1ibHVy',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': '*',
  };

  const blobtoDataURL = (blob, callback) => {
    const fr = new FileReader();
    fr.onload = function (e) {
      callback(e.target.result);
    };
    fr.readAsDataURL(blob);
  };

  console.log('123');

  const onPictureSend = () => {
    blobtoDataURL(cardImage, dataURL => {
      setDataURL(dataURL);
    });

    const data = new FormData();
    data.append('', cardImage);


    const obj = {
      fileName: `${vehicleType}-${vehicleAngle}.jpeg`,
      image: cardImage,
    };

    axios
      .post('/api/image', data, {
        headers: {
          Authorization: 'Basic Ymx1ci10ZXN0OnRlc3Rlci1ibHVy',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      })
      .then(res => console.log(res.data[0].blur))
      .catch(error => console.log(error));
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
