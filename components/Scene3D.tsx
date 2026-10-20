"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import ModelPlaceholder from "./ModelPlaceholder";

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-neutral-800 border-t-neutral-400 animate-spin" />
    </div>
  );
}

export default function Scene3D() {
  return (
    <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[440px] flex items-center justify-center">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 5.6], fov: 38 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="relative z-10"
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 8, 5]} intensity={1.8} castShadow />
          <directionalLight position={[-6, -4, -3]} intensity={0.5} />
          <Environment preset="city" />

          <ModelPlaceholder />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            scale={7}
            blur={2.4}
            far={3.5}
          />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.9}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
