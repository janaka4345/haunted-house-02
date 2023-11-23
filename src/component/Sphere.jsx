// import { useControls } from "leva";
export default function Sphere() {
  return (
    <mesh position={[-2, 0, 0]} castShadow>
      <sphereGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}
