import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./component/Experience";
import ExperienceEnv from "./component/ExperienceEnv";

function App() {
  return (
    <>
      <Canvas
        shadows={true}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
        {/* <ExperienceEnv /> */}
      </Canvas>
    </>
  );
}

export default App;
