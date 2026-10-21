"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, ContactShadows } from "@react-three/drei";
import IsometricRoomModel from "./IsometricRoomModel";

export default function Scene3DClient() {
  return (
    <div className="relative flex h-[320px] min-w-0 w-full items-center justify-center sm:h-[480px] lg:h-[640px]">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [3.4, 2.8, 4.8], fov: 32 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="relative z-10"
        >
          <color attach="background" args={["#f3f0e8"]} />
          <ambientLight intensity={1.45} color="#fff4e5" />
          <directionalLight position={[4, 7, 6]} intensity={2} color="#fff8ed" />
          <directionalLight position={[-4, 4, -3]} intensity={0.65} color="#e8c6a4" />

          <Bounds fit margin={1.2}>
            <IsometricRoomModel />
          </Bounds>

          <ContactShadows
            position={[0, 0.01, 0]}
            opacity={0.2}
            scale={6}
            blur={2.6}
            far={4}
          />
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={false}
            enableRotate
            enableDamping
            dampingFactor={0.08}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 3.3}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
