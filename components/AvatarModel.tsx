"use client";

import { useGLTF } from "@react-three/drei";

export default function AvatarModel() {
  const { scene } = useGLTF("/my-avatar.glb");

  return (
    <primitive
      object={scene}
      position={[0, -1.5, 0]}
      scale={1.8}
    />
  );
}

useGLTF.preload("/my-avatar.glb");
