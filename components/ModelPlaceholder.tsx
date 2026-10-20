"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

export default function ModelPlaceholder() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetRotationY = state.clock.elapsedTime * 0.35 + scrollRef.current * 0.0025;
      const targetRotationX = Math.sin(state.clock.elapsedTime * 0.5) * 0.12 + scrollRef.current * 0.0015;

      meshRef.current.rotation.y = THREE.MathUtils.damp(
        meshRef.current.rotation.y,
        targetRotationY,
        4,
        delta
      );
      meshRef.current.rotation.x = THREE.MathUtils.damp(
        meshRef.current.rotation.x,
        targetRotationX,
        4,
        delta
      );
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.4}>
      <group position={[0, 0, 0]}>
        <RoundedBox
          ref={meshRef}
          args={[1.5, 1.5, 1.5]}
          radius={0.2}
          smoothness={5}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#222838"
            roughness={0.22}
            metalness={0.8}
            clearcoat={0.85}
            clearcoatRoughness={0.12}
            reflectivity={0.9}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}
