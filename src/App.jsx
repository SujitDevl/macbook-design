import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

import "./style.css";
import MacContainer from "./MacContainer";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="absolute text-white top-32 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
        <h3 className="text-5xl tracking-tighter font-[700]">macbook pro.</h3>
      </div>
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
    </div>
  );
}

export default App;
