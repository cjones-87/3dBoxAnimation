import { useEffect } from 'react';

import * as THREE from 'three';

/*
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Stats from 'three/examples/jsm/libs/stats.module';
*/

import logo from './assets/14.png';
import blueShirtSmile from './assets/blueShirtSmile.png';
import altLogo from './assets/logoCJ.png';

function App() {
  useEffect(() => {
    //scene setup
    const scene = new THREE.Scene();

    //camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 100;

    //renderer setup
    const canvas = document.getElementById('myThreeJsCanvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true, //makes 3d object look smooth
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    //box geometry setup
    const boxGeometry = new THREE.BoxGeometry(30, 30, 30);
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(blueShirtSmile),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(blueShirtSmile),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(altLogo),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(altLogo),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(logo),
        side: THREE.DoubleSide,
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(logo),
        side: THREE.DoubleSide,
      }),
    ];
    // const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, cubeMaterials);
    scene.add(boxMesh);

    //orbit controls setup
    /*const controls = new OrbitControls(camera, renderer.domElement);*/

    //FPS stats setup
    /*const stats = Stats();
    document.body.appendChild(stats.dom);*/

    //animation setup
    const animate = () => {
      boxMesh.rotation.x += 0.008;
      boxMesh.rotation.y += 0.008;
      /* stats.update();
       controls.update();*/
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="App">
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
