import React, { Fragment, useState } from 'react';
import Camera from './Camera/index';
import { Root, Preview, Footer, GlobalStyle } from './styles';

function App() {
  const [isCameraOpen, setIsCameraOpen] = useState(true);
  const [cardImage, setCardImage] = useState();

  return (
    <Fragment>
      <Root>
        {/* {isCameraOpen && ( */}
          <Camera
            onCapture={blob => setCardImage(blob)}
            onClear={() => setCardImage(undefined)}
          />
        {/* )} */}

        {cardImage && (
          <div>
            {/* <h2>Preview</h2> */}
            <Preview src={cardImage && URL.createObjectURL(cardImage)} />
          </div>
        )}

        {/* <Footer>
          <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
          <button
            onClick={() => {
              setIsCameraOpen(false);
              setCardImage(undefined);
            }}>
            Close Camera
          </button>
        </Footer> */}
      </Root>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
