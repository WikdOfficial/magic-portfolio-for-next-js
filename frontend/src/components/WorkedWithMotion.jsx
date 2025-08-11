import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function IconMesh({ color = "#111" }) {
  const ref = useRef();
  const speed = useRef(0.6);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x += 0.01 * speed.current;
      ref.current.rotation.y += 0.013 * speed.current;
      ref.current.position.y = Math.sin(t * 1.6) * 0.08; // gentle float
    }
  });

  useEffect(() => {
    const onScroll = () => {
      const s = Math.min(1.4, 0.6 + window.scrollY * 0.0006);
      speed.current = s;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <torusKnotGeometry args={[0.4, 0.14, 96, 12]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.35} />
    </mesh>
  );
}

export default function WorkedWithMotion() {
  const [color, setColor] = useState("#111");

  return (
    <div className="h-20 w-28 rounded-md border bg-white/60 backdrop-blur-md cursor-pointer" onClick={() => setColor((c) => (c === "#111" ? "#333" : "#111"))} title="Interactive 3D icon">
      <Canvas camera={{ position: [1.5, 1.2, 2.2], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <IconMesh color={color} />
      </Canvas>
    </div>
  );
}