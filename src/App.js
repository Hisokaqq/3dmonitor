import './App.css';
import { Canvas } from '@react-three/fiber';
import { Mac } from './components/Mac';
import { OrbitControls, PresentationControls } from '@react-three/drei';
function App() {
  return (
    <Canvas camera={{fov: 45, near: .1, far: 2000, position: [-3, 1.5, 4]}}>
      <ambientLight intensity={1} />
      <PresentationControls polar={[-.4, .2]}>
        
       <Mac position-y={-1.2} />
       </PresentationControls>
    </Canvas>
  );
}

export default App;
