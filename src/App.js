import './App.css';
import React, { useRef, useEffect} from 'react';

function App() {
  const iframeRef = useRef("null");
  let player;

  useEffect(() => {
    if (typeof window.Testpress !== 'undefined') {
      player = new window.Testpress.Player(iframeRef.current);
    }
  }, []);

  const playVideo = () => {
    player.play()
  };


  return (
    <div className="App">
      <div
        className='container'
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <iframe
          ref={iframeRef}
          width="560"
          height="315"
          src="https://lmsdemo.testpress.in/embed/z1TLpfuZzXh/?access_token=5c49285b-0557-4cef-b214-66034d0b77c3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture"></iframe>
        <button onClick={playVideo} style={{ marginTop: "10px" }}>Play Video</button>
      </div>
      
    </div>
  );
}

export default App;
