
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';
import "./style.css";

const Cylinder = () => {
    const texture = useLoader(THREE.TextureLoader, "./xyz.png");
    let cyl = useRef(null);
  
    useFrame((state, delta) => {
      cyl.current.rotation.y += delta;
    });
  
    return (
        <group rotation={[0, 1, 0.4]}> 
      <mesh  ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial map={texture} transparent side={THREE.DoubleSide} />
      </mesh>
      </group>
    );
  };
  export default Cylinder;