import { useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
// import { useControls } from "leva";
import Plane from "./Plane";
import Sphere from "./Sphere";
import Box from "./Box";
import Door from "./Door";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[0, 15, 15]} castShadow />
      <pointLight
        intensity={10}
        position={[0, 1, 3]}
        color={"red"}
        castShadow
      />
      <OrbitControls />
      <Sphere />
      <Plane
        rotation={[5, 0, 0]}
        position={[0, -2, 0]}
        args={[20, 20, 10, 10]}
        // color="yellowgreen"
      />
      <Door
        rotation={[0, 0, 0]}
        position={[0, 2, -2]}
        args={[10, 10, 100, 100]}
      />
      <Box position={[1, 1, 0]} />
    </>
  );
}
