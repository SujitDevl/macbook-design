import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

function MacContainer() {
  let model = useGLTF("./mac.glb");
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
}

export default MacContainer;
