"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, ContactShadows } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, Bounds } from "@react-three/drei";
import { Suspense } from "react";

// Abstract "Backend Tech Core" to represent a Backend Engineer creatively
function BackendCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.x = t * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.8;
      ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.6;
      ring2Ref.current.rotation.z = t * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.5;
      ring3Ref.current.rotation.z = t * 0.7;
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
        {/* The Central Data Core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#00f5d4" wireframe />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#00f5d4" emissive="#00f5d4" emissiveIntensity={0.5} transparent opacity={0.8} />
        </mesh>

        {/* Orbiting Tech Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#38bdf8" />
        </mesh>
        
        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#818cf8" />
        </mesh>

        <mesh ref={ring3Ref}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshStandardMaterial color="#c084fc" />
        </mesh>
      </Float>
    </group>
  );
}

// Background Particles
function TechParticles() {
  const [particles] = useState(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  });

  const ref = useRef<THREE.InstancedMesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  const dummy = new THREE.Object3D();

  useEffect(() => {
    if (ref.current) {
      particles.forEach((pos, i) => {
        dummy.position.copy(pos);
        dummy.updateMatrix();
        ref.current!.setMatrixAt(i, dummy.matrix);
      });
      ref.current.instanceMatrix.needsUpdate = true;
    }
  }, [particles]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, 50]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
    </instancedMesh>
  );
}

export function DeveloperAvatar() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          <BackendCore />
        </Suspense>
        <TechParticles />

        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
