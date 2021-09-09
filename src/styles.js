import styled, { createGlobalStyle } from 'styled-components';

export const RootStyled = styled.div`
  padding: 20px;

  & > h4 {
    text-align: center;
    margin: 0;
    margin-bottom: 16px;
    letter-spacing: 0.6px;
  }
`;

export const VehicleTypeSelect = styled.select`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  border-color: #ccefff;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-weight: 700;
`;

export const VehicleAngleSection = styled.div`
  height: 60px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  & > p {
    margin: 0;
    font-weight: 700;
  }

  & > button {
    border: 0;
    padding: 5px 20px;
    border-radius: 99px;
    color: #1ab6ff;
    background-color: #ccefff;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    overflow-y: ${({ isCameraOpen }) => (isCameraOpen ? 'hidden' : 'auto')}; 
    height: 100%;
    padding: 32px;
    margin: 0;
    padding: 0;
  }

  div#root {
    height: 100%;
  }
`;

export const Root = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 50px 0 100px;
`;

export const Preview = styled.img`
  width: 100%;
  height: auto;
  margin: 25px 0;
`;

export const Footer = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: silver;

  button {
    margin: 0 10px;
  }
`;


