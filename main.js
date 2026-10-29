import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear la geometría compartida para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Crear los tres cubos con diferentes colores y materiales
const materialVerde = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cuboVerde = new THREE.Mesh(geometry, materialVerde);
cuboVerde.position.x = -2;
scene.add(cuboVerde);

const materialAzul = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cuboAzul = new THREE.Mesh(geometry, materialAzul);
cuboAzul.position.x = 0;
scene.add(cuboAzul);

const materialRojo = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cuboRojo = new THREE.Mesh(geometry, materialRojo);
cuboRojo.position.x = 2;
scene.add(cuboRojo);

// Agregar luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con velocidades aumentadas
function animate() {
    // Cubo verde (velocidad base)
    cuboVerde.rotation.x += 0.01;
    cuboVerde.rotation.y += 0.01;

    // Cubo azul (velocidad intermedia más alta)
    cuboAzul.rotation.x += 0.03;
    cuboAzul.rotation.y += 0.03;

    // Cubo rojo (velocidad máxima más alta)
    cuboRojo.rotation.x += 0.065;
    cuboRojo.rotation.y += 0.065;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);