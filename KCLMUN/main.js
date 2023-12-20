import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
 // Import the GLTFLoader
import "./style.css";

const sizes = {
  w: window.innerWidth,
  h: window.innerHeight,
};

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff)

// Load your custom .glb model
const loader = new GLTFLoader();
let model;

loader.load("./3dpea.glb", (gltf) => {
  model = gltf.scene;
  scene.add(model);

  // Adjust the position, rotation, and scale of your model if needed
  model.position.set(0, 0, 0);
  model.rotation.set(0, 0, 0);
  model.scale.set(1, 1, 1);
});


// light
const light = new THREE.PointLight(0xffffff, 30000, 10000);
light.position.set(0, 100, 100);
scene.add(light);

const light2 = new THREE.PointLight(0xffffff, 30000, 10000);
light2.position.set(0, 100, -100);
scene.add(light2);

// camera
const camera = new THREE.PerspectiveCamera(45, sizes.w / sizes.h, 0.1, 1000);
camera.position.z = 800;
scene.add(camera);

// render
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.w, sizes.h);
renderer.pixelRatio = 2
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

// Update resize
window.addEventListener("resize", () => {
  sizes.w = window.innerWidth;
  sizes.h = window.innerHeight;

  // update camera
  camera.aspect = sizes.w / sizes.h;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.w, sizes.h);
});

let haveRendered = false

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);

  if (model){
    if(!haveRendered){
      haveRendered = true
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.fromTo(model.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
      tl.fromTo(".title", {y: "-1000%"}, {y: "0%"});
    }
  }
};
loop();

