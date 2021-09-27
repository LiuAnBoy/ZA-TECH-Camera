import React from 'react';
import styled from 'styled-components';

const RootStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99999;

  .modal {
    width: 200px;
    height: 120px;
    background-color: #fff;
    border-radius: 6px;
    
    
    display: flex;
    flex-direction: column;

    & > p {
      text-align: center;
      margin-top: 30px;
      font-size: 18px;
    }

    & > button {
      width: 70%;
      font-size: 18px;
      margin: 0 auto;
    }
  }
`;

const CheckModal = ({
  handleModalClose,
  handlePictureClose,
  handleCameraClose,
  Quality,
  isOpen,
}) => {
  // console.log(isOpen);

  const handleClose = () => {
    handleModalClose();
    if(Quality === 0) {
      handlePictureClose();
    }
    if(Quality === 1) {
      handlePictureClose();
      handleCameraClose();
    }
    
  };

  console.log(Quality);
  return (
    <>
      {isOpen && (
        <RootStyled>
          <div className='modal'>
            <p>{Quality === 0 ? '請重新拍攝' : '上傳成功!'}</p>
            <button onClick={handleClose}>OK</button>
          </div>
        </RootStyled>
      )}
    </>
  );
};

export default CheckModal;
