import { useGLTF } from "@react-three/drei";
import React from "react";
import * as THREE from "three"

function MacContainer() {
  let model = useGLTF("./mac.glb");
  let meshes = {}
  model.scene.traverse(e => {
    if(e instanceof THREE.Mesh || e instanceof THREE.Group){
      meshes[e.name] = e;
    }
  })

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
}

export default MacContainer;
