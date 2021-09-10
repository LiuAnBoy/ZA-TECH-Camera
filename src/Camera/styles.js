import styled, { keyframes, css } from 'styled-components';

const flashAnimation = keyframes`
  from {
    opacity: 0.75;
  }

  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 100%; 
  /* height: 100%;

  @media (orientation: landscape) {
    /* width: 100vw; */
  /* } */
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  /* max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`}; */

  @media (orientation: landscape) {
    /* width: 100% !important; */
    /* height: initial !important; */
  }
`;

export const Canvas = styled.canvas`
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
`;

export const Video = styled.video`
  position: absolute;
  /* height: 100vh !important;
  width: initial !important; */
  /* aspect-ratio: 1.5; */

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  @media (orientation: landscape) {
    /* width: 110vw !important; */
    /* height: 110vh !important; */
    
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 90%;
    height: 30%;
    z-index: 9999;
    margin-bottom: 120px;

    @media (orientation: landscape) {
      width: 60%;
      height: 55%;
      margin-bottom: 0px;
      margin-left: -120px;
    }
  }
`;

export const Flash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  opacity: 0;

  ${({ flash }) => {
    if (flash) {
      return css`
        animation: ${flashAnimation} 750ms ease-out;
      `;
    }
  }}
`;

export const Button = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 999px;
  margin-top: 56px;
  background: #e6e6e6;
  z-index: 999;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid #b3b3b3;

  @media (orientation: landscape) {
    position: absolute;
    right: 35px;
    left: initial;
    transform: translateX(0);
    bottom: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
  }
`;
