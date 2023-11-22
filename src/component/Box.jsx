// import { useControls } from "leva";
export default function Box() {
  return (
    <mesh position={[3, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
