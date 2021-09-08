import React, { Fragment, useState, useEffect } from 'react';
import Head from './components/Head';
import Camera from './Camera/index';
import {
  Root,
  Preview,
  Footer,
  GlobalStyle,
  VehicleTypeSelect,
  RootStyled,
  VehicleAngleSection,
} from './styles';
import CameraSection from './components/Camera';

function App() {
  const [vehicleType, setVehicleType] = useState('');
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [vehicleAngle, setVehicleAngle] = useState('');

  const handleVehicleTypeChange = e => {
    setVehicleType(e.target.value);
  };

  const openCamera = e => {
    e.preventDefault();
    setCameraOpen(true);
    setVehicleAngle(e.target.value);
  };

  const closeCamera = () => {
    setCameraOpen(false);
    setVehicleAngle('');
  };

  return (
    <RootStyled>
      <Head />
      <h1>Vehicle Type</h1>
      <VehicleTypeSelect onChange={e => handleVehicleTypeChange(e)}>
        <option value=''>請選擇</option>
        <option value='Hatchback'>Hatchback</option>
        <option value='Minivan'>Minivan</option>
        <option value='Motorbike'>Motorbike</option>
        <option value='Pickup'>Pickup</option>
        <option value='Sedan'>Sedan</option>
        <option value='SUV'>SUV</option>
        <option value='Wagon'>Wagon</option>
      </VehicleTypeSelect>

      <VehicleAngleSection>
        <p>Front of the Car</p>
        <button
          onClick={e => openCamera(e)}
          value='front'
          disabled={vehicleType === '' ? true : false}>
          Upload
        </button>
      </VehicleAngleSection>

      <VehicleAngleSection>
        <p>Left of the Car</p>
        <button
          onClick={e => openCamera(e)}
          value='left'
          disabled={vehicleType === '' ? true : false}>
          Upload
        </button>
      </VehicleAngleSection>

      <VehicleAngleSection>
        <p>Right of the Car</p>
        <button
          onClick={e => openCamera(e)}
          value='right'
          disabled={vehicleType === '' ? true : false}>
          Upload
        </button>
      </VehicleAngleSection>

      <VehicleAngleSection>
        <p>Dashboard of the Car</p>
        <button
          onClick={e => openCamera(e)}
          value='dashboard'
          disabled={vehicleType === '' ? true : false}>
          Upload
        </button>
      </VehicleAngleSection>

      <CameraSection
        isCameraOpen={isCameraOpen}
        closeCamera={closeCamera}
        vehicleType={vehicleType}
        vehicleAngle={vehicleAngle}
      />

      <GlobalStyle />
    </RootStyled>
  );
}

export default App;
