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
  flex-flow: column;
  align-items: center; */
  width: 100%;
  height: 100vh;

  @media (orientation: landscape) {
    flex-flow: row;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  /* max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`}; */
  overflow: hidden;

  @media (orientation: landscape) {
    width: 75vw;
    top: -50px;
  }
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
    width: 90%;
    height: 30%;
    z-index: 9999;
    margin-bottom: 120px;

    @media (orientation: landscape) {
      /* transform: rotate(90deg); */
      width: 100%;
      height: 70%;
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
  border: 0;
  margin-top: 56px;
  background: silver;
  z-index: 999;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

  @media (orientation: landscape) {
    position: relative;
    left: 60px;
    top: -70px;
  }
`;

export const closeIcon = styled.div`
  z-index: 1000;
  position: absolute;
  bottom: 0;
  width: 30px;
  height: 30px;

  & > img {
    width: 30px;
    height: 30px;
  }
`;
