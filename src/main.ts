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

// Helper function to apply greyscale material to SP model
function setSPModelGreyscale() {
  if (!spObject) return;
  spObject.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const meshName = mesh.name.toLowerCase();
      
      // Create greyscale material based on mesh name
      let material: THREE.Material;
      
      if (meshName.includes('gb_silver') || meshName.includes('body')) {
        material = new THREE.MeshStandardMaterial({
          color: 0x888888, // Grey color
          metalness: 0.3,
          roughness: 0.7
        });
      } else if (meshName.includes('button_black') || meshName.includes('black_button')) {
        material = new THREE.MeshStandardMaterial({
          color: 0x444444, // Dark grey
          roughness: 0.2
        });
      } else if (meshName.includes('button_light') || meshName.includes('light_grey')) {
        material = new THREE.MeshStandardMaterial({
          color: 0xaaaaaa, // Light grey
          metalness: 0.1,
          roughness: 0.6
        });
      } else if (meshName.includes('screen_black') || meshName.includes('screen')) {
        material = new THREE.MeshStandardMaterial({
          color: 0x333333, // Very dark grey
          metalness: 0.2,
          roughness: 0.8,
          emissive: new THREE.Color(0x003300),
          emissiveIntensity: 0.1
        });
      } else if (meshName.includes('screen_glass') || meshName.includes('glass')) {
        material = new THREE.MeshStandardMaterial({
          color: 0x666666,
          roughness: 0.1,
          metalness: 0.1,
          transparent: true,
          opacity: 0.6
        });
      } else if (meshName.includes('port_metal') || meshName.includes('port')) {
        material = new THREE.MeshStandardMaterial({
          color: 0x777777,
          metalness: 0.8,
          roughness: 0.2
        });
      } else if (meshName.includes('pokemon') || meshName.includes('cartridge')) {
        material = new THREE.MeshStandardMaterial({
          color: 0x555555,
          roughness: 0.4,
          metalness: 0.1
        });
      } else {
        // Default greyscale material
        material = new THREE.MeshStandardMaterial({
          color: 0x888888,
          metalness: 0.3,
          roughness: 0.7
        });
      }
      
      mesh.material = material;
    }
  });
}

// Helper function to apply wireframe material to SP model
function setSPModelWireframe() {
  if (!spObject) return;
  spObject.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ 
        wireframe: true,
        color: 0x666666
      });
    }
  });
}

function applyGreyscale() {
  if (!greyTexture) return;
  setModelMaterial(new THREE.MeshStandardMaterial({ map: greyTexture }));
  setSPModelGreyscale();
}

function applyColor() {
  if (!colorTexture) return;
  setModelMaterial(new THREE.MeshStandardMaterial({ map: colorTexture }));
  // Restore SP model to original materials
  if (spObject) {
    spObject.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const meshName = mesh.name.toLowerCase();
        
        // Create original material based on mesh name
        let material: THREE.Material;
        
        if (meshName.includes('gb_silver') || meshName.includes('body')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.gbSilverAlbedo,
            normalMap: spTextures.gbSilverNormal,
            roughnessMap: spTextures.gbSilverRoughness,
            metalnessMap: spTextures.gbSilverMetallic,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('button_black') || meshName.includes('black_button')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.buttonBlackAlbedo,
            roughnessMap: spTextures.buttonBlackRoughness,
            aoMap: spTextures.buttonBlackAO,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('button_light') || meshName.includes('light_grey')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.buttonLightGreyAlbedo,
            normalMap: spTextures.buttonLightGreyNormal,
            roughnessMap: spTextures.buttonLightGreyRoughness,
            metalnessMap: spTextures.buttonLightGreyMetallic,
            aoMap: spTextures.buttonLightGreyAO,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('screen_black') || meshName.includes('screen')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.screenBlackAlbedo,
            normalMap: spTextures.screenBlackNormal,
            roughnessMap: spTextures.screenBlackRoughness,
            metalnessMap: spTextures.screenBlackMetallic,
            emissiveMap: spTextures.screenEmissive,
            emissive: new THREE.Color(0x00ff00),
            emissiveIntensity: 0.2,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('screen_glass') || meshName.includes('glass')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.screenGlassAlbedo,
            roughnessMap: spTextures.screenGlassRoughness,
            metalnessMap: spTextures.screenGlassMetallic,
            alphaMap: spTextures.screenGlassOpacity,
            transparent: true,
            opacity: 0.8
          });
        } else if (meshName.includes('port_metal') || meshName.includes('port')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.portMetalAlbedo,
            normalMap: spTextures.portMetalNormal,
            roughnessMap: spTextures.portMetalRoughness,
            metalnessMap: spTextures.portMetalMetallic,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('pokemon') || meshName.includes('cartridge')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.pokemonRubyCoverAlbedo,
            roughnessMap: spTextures.pokemonRubyCoverRoughness,
            metalnessMap: spTextures.pokemonRubyCoverMetallic
          });
        } else {
          // Default material for any unmatched meshes
          material = new THREE.MeshStandardMaterial({
            map: spTextures.gbSilverAlbedo,
            normalMap: spTextures.gbSilverNormal,
            roughnessMap: spTextures.gbSilverRoughness,
            metalnessMap: spTextures.gbSilverMetallic
          });
        }
        
        mesh.material = material;
      }
    });
  }
}

function applyWireframe() {
  setModelMaterial(new THREE.MeshStandardMaterial({ wireframe: true }));
  setSPModelWireframe();
}

const sceneB = new THREE.Scene()
sceneB.background = new THREE.Color(0xededed)

// Add lights to sceneB
const ambientLightB = new THREE.AmbientLight(0xffffff, 0.6);
sceneB.add(ambientLightB);

const directionalLightB = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLightB.position.set(5, 10, 7.5);
sceneB.add(directionalLightB);

// Load Gameboy-SP model for sceneB
let spObject: THREE.Object3D | null = null;

// Load SP textures
const spTextureLoader = new THREE.TextureLoader();
const spTextures = {
  // Main body textures
  gbSilverAlbedo: spTextureLoader.load(base + 'sp_textures/GB_Silver_Base_albedo.png'),
  gbSilverNormal: spTextureLoader.load(base + 'sp_textures/GB_Silver_Base_normal.png'),
  gbSilverRoughness: spTextureLoader.load(base + 'sp_textures/GB_Silver_Base_roughness.png'),
  gbSilverMetallic: spTextureLoader.load(base + 'sp_textures/GB_Silver_Base_metallic.png'),
  
  // Button textures
  buttonBlackAlbedo: spTextureLoader.load(base + 'sp_textures/Button_Black_Glossy_albedo.png'),
  buttonBlackRoughness: spTextureLoader.load(base + 'sp_textures/Button_Black_Glossy_roughness.png'),
  buttonBlackAO: spTextureLoader.load(base + 'sp_textures/Button_Black_Glossy_AO.png'),
  
  // Light grey buttons
  buttonLightGreyAlbedo: spTextureLoader.load(base + 'sp_textures/Buttons_Light_Grey_albedo.png'),
  buttonLightGreyNormal: spTextureLoader.load(base + 'sp_textures/Buttons_Light_Grey_normal.png'),
  buttonLightGreyRoughness: spTextureLoader.load(base + 'sp_textures/Buttons_Light_Grey_roughness.png'),
  buttonLightGreyMetallic: spTextureLoader.load(base + 'sp_textures/Buttons_Light_Grey_metallic.png'),
  buttonLightGreyAO: spTextureLoader.load(base + 'sp_textures/Buttons_Light_Grey_AO.png'),
  
  // Screen textures
  screenBlackAlbedo: spTextureLoader.load(base + 'sp_textures/Screen_Black_albedo.png'),
  screenBlackNormal: spTextureLoader.load(base + 'sp_textures/Screen_Black_normal.png'),
  screenBlackRoughness: spTextureLoader.load(base + 'sp_textures/Screen_Black_roughness.png'),
  screenBlackMetallic: spTextureLoader.load(base + 'sp_textures/Screen_Black_metallic.png'),
  
  // Screen glass
  screenGlassAlbedo: spTextureLoader.load(base + 'sp_textures/Screen_Glass_albedo.png'),
  screenGlassRoughness: spTextureLoader.load(base + 'sp_textures/Screen_Glass_roughness.png'),
  screenGlassMetallic: spTextureLoader.load(base + 'sp_textures/Screen_Glass_metallic.png'),
  screenGlassOpacity: spTextureLoader.load(base + 'sp_textures/Screen_Glass_opacity.png'),
  
  // Emissive textures
  screenEmissive: spTextureLoader.load(base + 'sp_textures/Screen_emissive.png'),
  batteryLightEmissive: spTextureLoader.load(base + 'sp_textures/Battery_Light_emissive.png'),
  
  // Port textures
  portMetalAlbedo: spTextureLoader.load(base + 'sp_textures/Port_Metal_albedo.png'),
  portMetalNormal: spTextureLoader.load(base + 'sp_textures/Port_Metal_normal.png'),
  portMetalRoughness: spTextureLoader.load(base + 'sp_textures/Port_Metal_roughness.png'),
  portMetalMetallic: spTextureLoader.load(base + 'sp_textures/Port_Metal_metallic.png'),
  
  // Game cartridge textures
  pokemonRubyCoverAlbedo: spTextureLoader.load(base + 'sp_textures/Pokemon_Ruby_Cover_albedo.png'),
  pokemonRubyCoverRoughness: spTextureLoader.load(base + 'sp_textures/Pokemon_Ruby_Cover_roughness.png'),
  pokemonRubyCoverMetallic: spTextureLoader.load(base + 'sp_textures/Pokemon_Ruby_Cover_metallic.png'),
  pokemonRubyCartridgeAlbedo: spTextureLoader.load(base + 'sp_textures/Pokemon_Ruby_Cartridge_albedo.png'),
  
  // Background textures
  blackTextBackgroundMetallic: spTextureLoader.load(base + 'sp_textures/Black_TEXT_Background_metallic.png'),
  buttonBlackAOAlt: spTextureLoader.load(base + 'sp_textures/Button_Black_AO.png')
};

const spLoader = new OBJLoader();
spLoader.load(
  base + 'Gameboy-SP.obj',
  (object) => {
    spObject = object;
    
    // Apply materials to SP model based on mesh names
    object.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const meshName = mesh.name.toLowerCase();
        
        // Create material based on mesh name
        let material: THREE.Material;
        
        if (meshName.includes('gb_silver') || meshName.includes('body')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.gbSilverAlbedo,
            normalMap: spTextures.gbSilverNormal,
            roughnessMap: spTextures.gbSilverRoughness,
            metalnessMap: spTextures.gbSilverMetallic,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('button_black') || meshName.includes('black_button')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.buttonBlackAlbedo,
            roughnessMap: spTextures.buttonBlackRoughness,
            aoMap: spTextures.buttonBlackAO,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('button_light') || meshName.includes('light_grey')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.buttonLightGreyAlbedo,
            normalMap: spTextures.buttonLightGreyNormal,
            roughnessMap: spTextures.buttonLightGreyRoughness,
            metalnessMap: spTextures.buttonLightGreyMetallic,
            aoMap: spTextures.buttonLightGreyAO,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('screen_black') || meshName.includes('screen')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.screenBlackAlbedo,
            normalMap: spTextures.screenBlackNormal,
            roughnessMap: spTextures.screenBlackRoughness,
            metalnessMap: spTextures.screenBlackMetallic,
            emissiveMap: spTextures.screenEmissive,
            emissive: new THREE.Color(0x00ff00),
            emissiveIntensity: 0.2,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('screen_glass') || meshName.includes('glass')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.screenGlassAlbedo,
            roughnessMap: spTextures.screenGlassRoughness,
            metalnessMap: spTextures.screenGlassMetallic,
            alphaMap: spTextures.screenGlassOpacity,
            transparent: true,
            opacity: 0.8
          });
        } else if (meshName.includes('port_metal') || meshName.includes('port')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.portMetalAlbedo,
            normalMap: spTextures.portMetalNormal,
            roughnessMap: spTextures.portMetalRoughness,
            metalnessMap: spTextures.portMetalMetallic,
            normalScale: new THREE.Vector2(1, 1)
          });
        } else if (meshName.includes('pokemon') || meshName.includes('cartridge')) {
          material = new THREE.MeshStandardMaterial({
            map: spTextures.pokemonRubyCoverAlbedo,
            roughnessMap: spTextures.pokemonRubyCoverRoughness,
            metalnessMap: spTextures.pokemonRubyCoverMetallic
          });
        } else {
          // Default material for any unmatched meshes
          material = new THREE.MeshStandardMaterial({
            map: spTextures.gbSilverAlbedo,
            normalMap: spTextures.gbSilverNormal,
            roughnessMap: spTextures.gbSilverRoughness,
            metalnessMap: spTextures.gbSilverMetallic
          });
        }
        
        mesh.material = material;
      }
    });
    
    // Center the SP model
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    object.position.x = -center.x - .04;
    object.position.y = -center.y + .65;
    object.position.z = -center.z + .7;
    
    // Scale the model appropriately
    object.scale.set(0.21, 0.21, 0.21);
    
    sceneB.add(object);
  },
  (xhr) => {
    console.log('SP Model: ' + (xhr.loaded / xhr.total * 100) + '% loaded');
  },
  (error) => {
    console.error('An error happened while loading the SP model:', error);
  }
);

// Add XYZ coordinate system to sceneB
// const axesHelper = new THREE.AxesHelper(0.5);
// sceneB.add(axesHelper);

// SceneC (Game Boy Color) removed

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

let activeScene = sceneB
const setScene = {
  sceneA: () => {
    activeScene = sceneA
  },
  sceneB: () => {
    activeScene = sceneB
  },
}

// GUI with only Mods folder (no scene switching controls)
const gui = new GUI();
gui.title('Mods'); 
const modsFolder = gui.addFolder('Color');
modsFolder.add({ Greyscale: applyGreyscale }, 'Greyscale').name('Greyscale');
modsFolder.add({ Color: applyColor }, 'Color').name('Original Color');
modsFolder.add({ Wireframe: applyWireframe }, 'Wireframe').name('Wireframe');
modsFolder.close(); // Explicitly close the folder

// Connect bottom control bar buttons to switch scenes
window.addEventListener('DOMContentLoaded', () => {
  const btnGBA = document.getElementById('btn-gba');
  const btnGBASP = document.getElementById('btn-gba-sp');
  if (btnGBA) btnGBA.addEventListener('click', () => setScene.sceneA());
  if (btnGBASP) btnGBASP.addEventListener('click', () => setScene.sceneB());
});

function animate() {
  requestAnimationFrame(animate)

  // Auto-rotate objects around y-axis when mouse is not hovering
  if (activeScene === sceneA && loadedObject && !isMouseOver) {
    loadedObject.rotation.y += 0.004;
  }
  
  if (activeScene === sceneB && spObject && !isMouseOver) {
    spObject.rotation.y += 0.004;
  }
  

  renderer.render(activeScene, camera)
}

animate()