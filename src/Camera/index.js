import React, { useState, useRef } from 'react';
import Measure from 'react-measure';
import PictureSection from '../components/PictureSection';
import { useUserMedia } from '../hooks/useUserMedia';
import { useCardRatio } from '../hooks/useCardRatio';
import { useOffsets } from '../hooks/useOffset';
import {
  Video,
  Canvas,
  Wrapper,
  Container,
  Flash,
  Overlay,
  Button,
} from './styles';

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
};

function Camera({ vehicleType, vehicleAngle }) {
  const canvasRef = useRef();
  const videoRef = useRef();

  const [container, setContainer] = useState({ width: 0, height: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCanvasEmpty, setIsCanvasEmpty] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false);
  const [cardImage, setCardImage] = useState();

  const mediaStream = useUserMedia(CAPTURE_OPTIONS);
  const [aspectRatio, calculateRatio] = useCardRatio(1.586);
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  );

  console.log(videoRef.current && videoRef.current.videoWidth);
  console.log(videoRef.current && videoRef.current.videoHeight);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleResize(contentRect) {
    setContainer({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
      // height: 480,
    });
  }

  function handleCanPlay() {
    // calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    setIsVideoPlaying(true);
    videoRef.current.play();
  }

  function handleCapture() {
    const context = canvasRef.current.getContext('2d');

    console.log(container);

    context.drawImage(
      videoRef.current,
      0,
      0,
      container.width,
      container.height,
      0,
      0,
      container.width,
      container.height
    );

    canvasRef.current.toBlob(blob => setCardImage(blob), 'image/jpeg', 1);
    setIsCanvasEmpty(false);
    setIsFlashing(true);
  }

  function handleClear() {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setIsCanvasEmpty(true);
  }

  if (!mediaStream) {
    return null;
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <Wrapper>
          <Container
            ref={measureRef}
            maxHeight={videoRef.current && videoRef.current.videoHeight}
            maxWidth={videoRef.current && videoRef.current.videoWidth}
            style={{
              height: `${container.height}px`,
            }}>
            <Video
              ref={videoRef}
              hidden={!isVideoPlaying}
              onCanPlay={handleCanPlay}
              autoPlay
              playsInline
              muted
              height={container.height}
              // style={{
              //   top: `-${offsets.y}px`,
              //   left: `-${offsets.x}px`,
              // }}
            />

            {/* <Overlay hidden={!isVideoPlaying}>
              <img
                className={
                  vehicleAngle === 'dashboard' ? 'dashboard-img' : 'side-img'
                }
                src={`./SDK/${vehicleType}/${vehicleAngle}@2x.png`}
                alt='guide-image'
              />
            </Overlay> */}

            <Canvas
              ref={canvasRef}
              width={document.body.clientWidth}
              height={document.body.clientHeight}
            />
            {/* 
            <Flash
              flash={isFlashing}
              onAnimationEnd={() => setIsFlashing(false)}
            /> */}
          </Container>

          {isVideoPlaying && <Button onClick={handleCapture} />}

          {isCanvasEmpty ? null : (
            <PictureSection
              vehicleType={vehicleType}
              vehicleAngle={vehicleAngle}
              cardImage={cardImage}
              onPictureClose={handleClear}
            />
          )}
        </Wrapper>
      )}
    </Measure>
  );
}

export default Camera;
