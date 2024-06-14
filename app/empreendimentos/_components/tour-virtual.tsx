import { Imovel } from '@/types/global';

import * as THREE from 'three';
import { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Html, Preload, OrbitControls } from '@react-three/drei';
import { Popconfirm } from 'antd';

function Dome({
  name,
  position,
  texture,
  onClick,
}: {
  name: string;
  position: THREE.Vector3 | [number, number, number];
  texture: THREE.Texture;
  onClick: () => void;
}) {
  return (
    <group>
      {/* This mesh is the ambient mesh */}
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>

      {/* This mesh above is the mesh BUTTON INSIDE/OUTSIDE and its inside the 3d Space  you can cahnge it */}
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        <Html center>
          <Popconfirm
            title={`Do you want to go to the ${name}?`}
            onConfirm={onClick}
            okText="Yes"
            cancelText="No"
          >
            <a onClick={(e) => e.preventDefault()} href="#">
              {name}
            </a>
          </Popconfirm>
        </Html>
      </mesh>
    </group>
  );
}

function Portals({ imovel }: { imovel: Imovel }) {
  const panoramas = imovel.attributes.panoramas.data;

  const [index, set] = useState(0);
  const { link, ...props } = panoramas[index];
  const maps = useLoader(THREE.TextureLoader, panoramas.map((entry) => entry.url)) // prettier-ignore
  // const position = new THREE.Vector3(...props.position); // convert position tuple to Vector3

  return (
    <>
      <Dome
        onClick={() => {
          set(link[0]);
        }}
        {...props}
        position={panoramas[index].position}
        texture={maps[index]}
      />
    </>
  );
}

export const TourVirtual = ({ imovel }: { imovel: Imovel }) => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-10">
        <Canvas
          style={{ height: '100vh' }}
          frameloop="demand"
          camera={{ position: [0, 0, 0.1] }}
        >
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.2}
            autoRotate={false}
            rotateSpeed={-0.5}
          />
          <Suspense fallback={null}>
            <Preload all />
            <Portals imovel={imovel} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
