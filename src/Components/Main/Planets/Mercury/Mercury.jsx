import React, { useRef } from "react";
import MarsTexture from '../../../../assets/mercury.jpg';
import { TextureLoader } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Mars() {
    const marsTexture = useLoader(TextureLoader, MarsTexture);
    const meshRef = useRef();

    const initialRotation = new THREE.Euler(
        THREE.MathUtils.degToRad(0.1),   
        THREE.MathUtils.degToRad(1919), 
        0                               
    );

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x = initialRotation.x;
            meshRef.current.rotation.y = initialRotation.y + (Date.now() * 0.001) % (3 * Math.PI); 
            meshRef.current.rotation.z = initialRotation.z;
        }
    });

    return (
        <>
            <ambientLight />
            <mesh ref={meshRef}>
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial map={marsTexture} />
            </mesh>
        </>
    );
}
