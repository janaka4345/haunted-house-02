import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  BakeShadows,
  ContactShadows,
  Sky,
  Environment,
} from "@react-three/drei";
import { useRef } from "react";
// import { Perf } from "r3f-perf";

export default function ExperienceEnv() {
  const cube = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <BakeShadows />
      <OrbitControls makeDefault />
      <ContactShadows
        position={[0, -0.99, 0]}
        resolution={512}
        // opacity={0.5}
        blur={2.5}
      />
      {/* <Sky /> */}
      <Environment
        background
        // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        preset="studio"
      />

      {/* <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
        // castShadow
        // shadow-mapSize={[1024, 1024]}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      <mesh
        position-x={-2}
        //  castShadow
      >
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        // castShadow
        ref={cube}
        position-x={2}
        scale={1.5}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
