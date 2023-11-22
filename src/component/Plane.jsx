// import { useControls } from "leva";
export default function Plane() {
  return (
    <mesh rotation={[5, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="yellowgreen" />
    </mesh>
  );
}
