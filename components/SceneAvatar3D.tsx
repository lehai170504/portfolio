"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float, useTexture, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function AvatarMesh() {
  const texture = useTexture("/avatar-2d.png");
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={groupRef} position={[0, 0, 0]}>
        <RoundedBox
          args={[2.7, 3.5, 0.12]}
          radius={0.14}
          smoothness={4}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#141824"
            roughness={0.2}
            metalness={0.85}
            clearcoat={0.6}
            clearcoatRoughness={0.15}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.065]}>
          <planeGeometry args={[2.52, 3.32]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>

        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[2.52, 3.32]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.12}
            roughness={0.05}
            metalness={0.1}
            reflectivity={0.9}
            clearcoat={1}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-neutral-800 border-t-blue-500 animate-spin" />
    </div>
  );
}

export default function SceneAvatar3D() {
  return (
    <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[480px] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-cyan-500/5 to-transparent blur-3xl" />

      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="relative z-10"
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[6, 8, 6]} intensity={1.8} castShadow />
          <directionalLight position={[-6, -4, -4]} intensity={0.4} />
          <Environment preset="city" />

          <AvatarMesh />

          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.6}
            scale={7}
            blur={2.4}
            far={3.8}
          />
          <OrbitControls
            enableZoom={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
