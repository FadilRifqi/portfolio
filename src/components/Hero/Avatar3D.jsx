import { Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE for vector calculations

const AvatarModel = () => {
  const { scene } = useGLTF('/preview.glb', true); // Replace with the correct path
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition(new THREE.Vector2(x, y));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (scene) {
      // Create an ambient light once
      const light = new THREE.AmbientLight(0xffffff, 2); // Adjust intensity as needed
      scene.add(light);

      // Clean up the light when the component is unmounted or scene changes
      return () => {
        scene.remove(light);
      };
    }
  }, [scene]);

  useFrame((state) => {
    if (scene) {
      const vector = new THREE.Vector3();
      const { camera } = state;

      // Calculate the position in 3D space where the mouse cursor points
      vector.set(mousePosition.x, mousePosition.y, 100).unproject(camera);

      // Calculate direction between the model and the camera
      const dir = vector.sub(camera.position).normalize();

      // Update model's rotation to face the mouse
      const angleY = Math.atan2(-dir.x, dir.z); // Y rotation (horizontal)
      const angleX = Math.asin(dir.y); // X rotation (vertical)

      scene.rotation.y = angleY; // Rotate around Y axis (horizontal)
      scene.rotation.x = angleX; // Rotate around X axis (vertical)
    }
  });

  // Position the model at the center
  return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
};

const Avatar3D = () => {
  const [cameraSettings, setCameraSettings] = useState({
    position: [-0.5, 2, 5],
    fov: 80,
  });

  useEffect(() => {
    const updateCameraSettings = () => {
      if (window.innerWidth < 768) {
        // Small screens
        setCameraSettings({ position: [0, 0, 5], fov: 80 });
      } else {
        // Medium and larger screens
        setCameraSettings({ position: [-0.5, 0, 5], fov: 80 });
      }
    };

    // Initial check
    updateCameraSettings();

    // Add event listener for window resize
    window.addEventListener('resize', updateCameraSettings);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCameraSettings);
    };
  }, []);

  return (
    <Canvas camera={cameraSettings}>
      <Suspense fallback={null}>
        <AvatarModel />
        <OrbitControls target={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default Avatar3D;
