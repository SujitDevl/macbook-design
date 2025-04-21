import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

import "./style.css";
import MacContainer from "./MacContainer";

function App() {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <OrbitControls />
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
