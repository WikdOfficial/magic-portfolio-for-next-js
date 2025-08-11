import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function VortexMaterial() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.uniforms.u_time.value = state.clock.getElapsedTime();
  });

  const uniforms = { u_time: { value: 0 }, u_res: { value: new THREE.Vector2(1, 1) } };

  const fragment = `
    precision mediump float;
    uniform float u_time; uniform vec2 u_res;
    vec3 palette(float t){ return mix(vec3(0.9), vec3(0.65), 0.2 + 0.2*sin(t)); }
    void main(){ vec2 uv=(gl_FragCoord.xy/u_res.xy)*2.-1.; uv.x*=u_res.x/u_res.y; float r=length(uv); float a=atan(uv.y,uv.x);
      float rings=sin(22.0*r - u_time*1.2);
      float flare=smoothstep(0.02,0.0,abs(r-0.55));
      float core=exp(-10.0*r*r);
      float glow=0.42*flare + 0.25*core + 0.25*abs(rings);
      vec3 col=palette(a + u_time*0.2);
      col = mix(vec3(1.0), col, 0.18);
      gl_FragColor=vec4(col, glow); }
  `;

  return (<shaderMaterial ref={ref} uniforms={uniforms} fragmentShader={fragment} vertexShader={`void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`} transparent />);
}

function Plane(){
  const ref=useRef();
  useFrame(({size})=>{ if(ref.current && ref.current.material){ ref.current.material.uniforms.u_res.value=new THREE.Vector2(size.width,size.height); }});
  return (<mesh ref={ref}><planeGeometry args={[4, 2.2, 1, 1]} /><VortexMaterial /></mesh>);
}

export default function WorkedWithVortex({ fallbackUrl }){
  return (
    <div className="absolute inset-0 -z-20 mix-blend-screen opacity-80">
      <Canvas camera={{ position:[0,0,1.6], fov:45 }} dpr={[1,1.5]}>
        <Plane />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:`url(${fallbackUrl||''})`, backgroundSize:'cover', backgroundPosition:'center', opacity:0.1 }} />
    </div>
  );
}