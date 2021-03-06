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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Video = styled.video`
  position: absolute;
  object-fit:cover

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
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
    z-index: 9999;
    margin-bottom: 200px;

    @media (orientation: landscape) {
      margin-bottom: 15px;
      margin-left: -120px;
    }
  }

  .vehicle-front-img {
    width: 90%;
    height: 40%;

    @media (orientation: landscape) {
      width: 100%;
      height: 100%;
      max-width: 460px;
      max-height: 285px;
    }
  }

  .vehicle-left-img {
    width: 90%;
    height: 30%;

    @media (orientation: landscape) {
      width: 100%;
      height: 100%;
      max-width: 470px;
      max-height: 210px;
    }
  }

  .vehicle-right-img {
    width: 90%;
    height: 30%;

    @media (orientation: landscape) {
      width: 100%;
      height: 100%;
      max-width: 470px;
      max-height: 210px;
    }
  }

  .vehicle-rear-img {
    width: 90%;
    height: 40%;

    @media (orientation: landscape) {
      width: 100%;
      height: 100%;
      max-width: 460px;
      max-height: 285px;
    }
  }

  .vehicle-dashboard-img {
    width: 90%;
    height: 30%;

    @media (orientation: landscape) {
      width: 100%;
      height: 100%;
      max-width: 440px;
      max-height: 190px;
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
