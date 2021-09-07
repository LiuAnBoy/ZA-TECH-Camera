import React, { Fragment, useState } from 'react';
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
      <h1>Vehicle Type</h1>
      <VehicleTypeSelect
        defaultValue='Pickup'
        onChange={e => handleVehicleTypeChange(e)}>
        <option value=''>請選擇</option>
        <option value='Pickup'>Pickup</option>
        <option value='Car'>Car</option>
      </VehicleTypeSelect>

      <VehicleAngleSection>
        <p>Front of the Car</p>
        <button onClick={e => openCamera(e)} value='front'>
          Upload
        </button>
      </VehicleAngleSection>

      <VehicleAngleSection>
        <p>Left of the Car</p>
        <button onClick={e => openCamera(e)} value='left'>
          Upload
        </button>
      </VehicleAngleSection>

      <VehicleAngleSection>
        <p>Right of the Car</p>
        <button onClick={e => openCamera(e)} value='right'>
          Upload
        </button>
      </VehicleAngleSection>

      <VehicleAngleSection>
        <p>Dashboard of the Car</p>
        <button onClick={e => openCamera(e)} value='dashboard'>
          Upload
        </button>
      </VehicleAngleSection>

      <CameraSection
        isCameraOpen={isCameraOpen}
        closeCamera={closeCamera}
        vehicleType={vehicleType}
        vehicleAngle={vehicleAngle}
      />
    </RootStyled>
  );
}

export default App;
