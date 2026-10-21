"use client";

import { Center, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function IsometricRoomModel() {
  const { scene } = useGLTF("/dev-desk.glb");
  const model = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;

      object.material = Array.isArray(object.material)
        ? object.material.map((material) => material.clone())
        : object.material.clone();

      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        if (!(material instanceof THREE.MeshStandardMaterial)) return;

        const hsl = { h: 0, s: 0, l: 0 };
        material.color.getHSL(hsl);

        if (hsl.h > 0.5 && hsl.h < 0.72 && hsl.s > 0.65) {
          material.color.set("#b9a991");
        }
      });
    });
    return clone;
  }, [scene]);

  return (
    <Center top>
      <primitive object={model} scale={1.4} />
    </Center>
  );
}

useGLTF.preload("/dev-desk.glb");
