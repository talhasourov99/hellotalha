 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.12;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.24} floatIntensity={0.42}>
      <mesh ref={mesh} scale={1.58}>
        <icosahedronGeometry args={[1, 48]} />
        <MeshDistortMaterial
          color="#baff38"
          emissive="#6b9e13"
          emissiveIntensity={0.36}
          roughness={0.18}
          metalness={0.36}
          distort={0.34}
          speed={1.7}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 3, 4]} intensity={2.4} color="#c7ff3b" />
      <pointLight position={[-4, -2, -3]} intensity={1.8} color="#a875ff" />
      <Stars radius={7} depth={3} count={550} factor={1.2} fade speed={0.35} />
      <Orb />
    </>
  );
}

export default function Scene() {
  return (
    <div className="scene-shell" aria-label="Animated three-dimensional abstract orb">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 1.5]}>
        <SceneContent />
      </Canvas>
      <div className="scene-ring scene-ring-one" />
      <div className="scene-ring scene-ring-two" />
      <span className="scene-dot scene-dot-one" />
      <span className="scene-dot scene-dot-two" />
    </div>
  );
}
