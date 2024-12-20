import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

export function LogoModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Hover animation
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    }
    if (glowRef.current) {
      const material = glowRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.6 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    }
  });

  return (
    <group>
      {/* Main logo */}
      <mesh
        ref={meshRef}
        scale={[1, 1, 0.2]}
      >
        <cylinderGeometry args={[1, 1, 1, 64]} />
        <meshStandardMaterial
          color={new THREE.Color(0x6eaaaa)}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Outer glow */}
      <mesh
        ref={glowRef}
        scale={[1.1, 1.1, 0.3]}
      >
        <cylinderGeometry args={[1, 1, 1, 64]} />
        <meshBasicMaterial
          color={new THREE.Color(0x6eaaaa)}
          transparent
          opacity={0.4}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}