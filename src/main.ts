import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const sceneA = new THREE.Scene()
sceneA.background = new THREE.Color(0xededed)

// Add lights to sceneA
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
sceneA.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
sceneA.add(directionalLight);

let loadedObject: THREE.Object3D | null = null;
let greyTexture: THREE.Texture | null = null;
let colorTexture: THREE.Texture | null = null;

// Load both textures: greyscale and original
const textureLoader = new THREE.TextureLoader();
const base = import.meta.env.BASE_URL;
textureLoader.load(base + 'substance_standardSurface1_BaseColor.png', (texture) => {
  colorTexture = texture;

  // Convert the texture to greyscale using a canvas
  const image = texture.image;
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const avg = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3;
      imageData.data[i] = avg;
      imageData.data[i+1] = avg;
      imageData.data[i+2] = avg;
    }
    ctx.putImageData(imageData, 0, 0);
    greyTexture = new THREE.Texture(canvas);
    greyTexture.needsUpdate = true;
  } else {
    console.error('Could not get 2D context from canvas.');
  }

  // Load the OBJ model after textures are ready
  const objLoader = new OBJLoader();
  objLoader.load(
    base + 'model_0.obj',
    (object) => {
      loadedObject = object;
      object.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
            map: greyTexture
          });
        }
      });
      object.scale.set(1/8, 1/8, 1/8);
      sceneA.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
      console.error('An error happened while loading the OBJ:', error);
    }
  );
},
undefined,
(err) => { console.error('Texture failed to load', err); }
);

// Helper functions to update the model's material
function setModelMaterial(material: THREE.Material) {
  if (!loadedObject) return;
  loadedObject.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).material = material;
    }
  });
}

function applyGreyscale() {
  if (!greyTexture) return;
  setModelMaterial(new THREE.MeshStandardMaterial({ map: greyTexture }));
}

function applyColor() {
  if (!colorTexture) return;
  setModelMaterial(new THREE.MeshStandardMaterial({ map: colorTexture }));
}

function applyWireframe() {
  setModelMaterial(new THREE.MeshStandardMaterial({ wireframe: true }));
}

const sceneB = new THREE.Scene()
sceneB.background = new THREE.TextureLoader().load('https://sbcode.net/img/grid.png')

const sceneC = new THREE.Scene()
sceneC.background = new THREE.CubeTextureLoader().setPath('https://sbcode.net/img/').load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'])
//sceneC.backgroundBlurriness = 0.5

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 1.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

new OrbitControls(camera, renderer.domElement)

// Mouse tracking for auto-rotation
let isMouseOver = false;
let lastMousePosition = { x: 0, y: 0 };

// Track mouse events
renderer.domElement.addEventListener('mouseenter', () => {
  isMouseOver = true;
});

renderer.domElement.addEventListener('mouseleave', () => {
  isMouseOver = false;
});

renderer.domElement.addEventListener('mousemove', (event) => {
  lastMousePosition.x = event.clientX;
  lastMousePosition.y = event.clientY;
});

let activeScene = sceneA
const setScene = {
  sceneA: () => {
    activeScene = sceneA
  },
  sceneB: () => {
    activeScene = sceneB
  },
  sceneC: () => {
    activeScene = sceneC
  },
}

// GUI with only Mods folder (no scene switching controls)
const gui = new GUI();
gui.title('Mods'); 
const modsFolder = gui.addFolder('Color');
modsFolder.add({ Greyscale: applyGreyscale }, 'Greyscale').name('Greyscale');
modsFolder.add({ Color: applyColor }, 'Color').name('Original Color');
modsFolder.add({ Wireframe: applyWireframe }, 'Wireframe').name('Wireframe');
modsFolder.open();

// Connect bottom control bar buttons to switch scenes
window.addEventListener('DOMContentLoaded', () => {
  const btnGBA = document.getElementById('btn-gba');
  const btnGBASP = document.getElementById('btn-gba-sp');
  const btnGBC = document.getElementById('btn-gbc');
  if (btnGBA) btnGBA.addEventListener('click', () => setScene.sceneA());
  if (btnGBASP) btnGBASP.addEventListener('click', () => setScene.sceneB());
  if (btnGBC) btnGBC.addEventListener('click', () => setScene.sceneC());
});

function animate() {
  requestAnimationFrame(animate)

  // Auto-rotate object around y-axis when mouse is not hovering
  if (loadedObject && !isMouseOver) {
    loadedObject.rotation.y += 0.004;
  }

  renderer.render(activeScene, camera)
}

animate()