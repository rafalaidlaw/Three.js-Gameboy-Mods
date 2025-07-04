import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const sceneA = new THREE.Scene()
sceneA.background = new THREE.Color(0xededed)

// Add lights to sceneA
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
sceneA.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
sceneA.add(directionalLight);

// Load model_0.obj and add it to sceneA with a texture
const textureLoader = new THREE.TextureLoader();
textureLoader.load('/substance_standardSurface1_BaseColor.png', (texture) => {
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

    const greyTexture = new THREE.Texture(canvas);
    greyTexture.needsUpdate = true;

    const objLoader = new OBJLoader();
    objLoader.load(
      '/model_0.obj',
      (object) => {
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
  } else {
    console.error('Could not get 2D context from canvas.');
  }
},
undefined,
(err) => { console.error('Texture failed to load', err); }
);

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

const stats = new Stats()
document.body.appendChild(stats.dom)

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

const gui = new GUI()
gui.add(setScene, 'sceneA').name('Scene A')
gui.add(setScene, 'sceneB').name('Scene B')
gui.add(setScene, 'sceneC').name('Scene C')

function animate() {
  requestAnimationFrame(animate)

  //cube.rotation.x += 0.01
  //cube.rotation.y += 0.01

  renderer.render(activeScene, camera)

  stats.update()
}

animate()