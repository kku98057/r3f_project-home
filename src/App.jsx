import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import MyScene from "./components/MyScene";
import { OrbitControls, ScrollControls } from "@react-three/drei";

function App() {
  return <Experience />;
}

export default App;

const Experience = () => {
  return (
    <Canvas camera={{ position: [2.3, 1.5, 2.3], fov: 64 }}>
      <Suspense fallback={null}>
        <ScrollControls pages={3} damping={0.25}>
          <MyScene />
        </ScrollControls>
      </Suspense>
      <ambientLight intensity={2} />
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
};
