// src/components/ModelViewer.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Componente para cargar el modelo glTF
function Model() {
  // Asegúrate de colocar el archivo glTF en la carpeta 'public' o importar el archivo.
  const { scene } = useGLTF("assets/knob.glb"); // Ruta relativa en la carpeta public
  return <primitive object={scene} />;
}

const ModelViewer = () => {
  return (
    <Canvas
      className="py-24"
      camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ModelViewer;
