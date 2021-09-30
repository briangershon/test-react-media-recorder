import React from 'react';
import PropTypes from 'prop-types';
import { ReactMediaRecorder } from 'react-media-recorder';

function App({ message }) {
  return (
    <>
      <h1>Hello</h1>
      <main id="main" className="content">
        {message}
      </main>

      <ReactMediaRecorder
        video
        render={({
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
          clearBlobUrl,
        }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <button onClick={clearBlobUrl}>Clear Recording</button>
            <audio src={mediaBlobUrl} controls autoPlay />
          </div>
        )}
      />
    </>
  );
}

App.propTypes = {
  message: PropTypes.string,
};

export default App;
