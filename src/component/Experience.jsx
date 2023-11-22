import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
// import { useControls } from "leva";
import Plane from "./Plane";
import Sphere from "./Sphere";
import Box from "./Box";

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 5]} />
      <OrbitControls />
      <Sphere />
      <Plane />
      <Box />
    </Canvas>
  );
}
