import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
const escena = new THREE.Scene();

const camara = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camara.position.set(0, 1, 11);
document.body.appendChild(render.domElement);

const controls = new OrbitControls(
    camara,render.domElement
);
controls.update();

const cafe = new THREE.MeshBasicMaterial({ color: 0x9b7045 });
const rosa = new THREE.MeshBasicMaterial({ color: 0xd979a6 });
const negro = new THREE.MeshBasicMaterial({ color: 0x111111 });
const blanco = new THREE.MeshBasicMaterial({ color: 0xffffff });

//Cabeza

const geometrycabeza = new THREE.SphereGeometry(1.5,32,20);
const cabeza = new THREE.Mesh( geometrycabeza, cafe );
cabeza.scale.set(1.05, 1.0, 0.85);
cabeza.position.set(-2.3, 1.7, 0);
escena.add(cabeza);

const geometrynariz = new THREE.SphereGeometry(0.65,24,16);
const nariz = new THREE.Mesh( geometrynariz, rosa);
nariz.scale.set(1.25, 0.75, 0.7);
nariz.position.set(-2.1, 1.50, 1.3);
escena.add(nariz);

const geometryojo = new THREE.SphereGeometry(0.22,16,12);
const ojoizquierdo = new THREE.Mesh( geometryojo, negro );
ojoizquierdo.position.set(-2.8, 2.25, 1.0);
escena.add(ojoizquierdo);

const geometrybrillo = new THREE.SphereGeometry(0.07,12,8);
const brilloizquierdo = new THREE.Mesh(geometrybrillo,blanco);
brilloizquierdo.position.set(-2.86, 2.32, 1.18);
escena.add(brilloizquierdo);

const ojoderecho = new THREE.Mesh(geometryojo,negro);
ojoderecho.position.set(-1.55, 2.25, 1.0);
escena.add(ojoderecho);

const brilloderecho = new THREE.Mesh(geometrybrillo,blanco);
brilloderecho.position.set(-1.61, 2.32, 1.18);
escena.add(brilloderecho);

const geometrycuerno = new THREE.ConeGeometry(0.6,1.6,16);
const cuerno = new THREE.Mesh(geometrycuerno,blanco);
cuerno.position.set(-2.1, 3.40, 0.1);
cuerno.rotation.z = -0.25;
escena.add(cuerno);

//Cuerpo

const geometrycuerpo1 = new THREE.SphereGeometry(1.2,24,16);
const cuerpo1 = new THREE.Mesh(geometrycuerpo1,cafe);
cuerpo1.scale.set(0.9, 0.8, 0.8);
cuerpo1.position.set(-2.2, 0.25, -0.59);
cuerpo1.rotation.z = -0.15;
escena.add(cuerpo1);

const geometrycuerpo2 = new THREE.SphereGeometry(0.99,24,16);
const cuerpo2 = new THREE.Mesh(geometrycuerpo2,cafe);
cuerpo2.scale.set(0.9, 0.78, 0.78);
cuerpo2.position.set(-1.90, -0.65, -1.2);
cuerpo2.rotation.z = -0.2;
escena.add(cuerpo2);

const geometrycuerpo3 = new THREE.SphereGeometry(0.89,24,16);
const cuerpo3 = new THREE.Mesh(geometrycuerpo3,cafe);
cuerpo3.scale.set(0.95, 0.75, 0.75);
cuerpo3.position.set(-1.5, -1.35, -1.9);
cuerpo3.rotation.z = -0.25;
escena.add(cuerpo3);

const geometrycuerpo4 = new THREE.SphereGeometry(0.81,24,16);
const cuerpo4 = new THREE.Mesh(geometrycuerpo4,cafe);
cuerpo4.scale.set(1.0, 0.72, 0.72);
cuerpo4.position.set(-1, -1.85, -2.6);
cuerpo4.rotation.z = -0.15;
escena.add(cuerpo4);

const geometrycuerpo5 = new THREE.SphereGeometry(0.77,24,16);
const cuerpo5 = new THREE.Mesh(geometrycuerpo5,cafe);
cuerpo5.scale.set(1.05, 0.7, 0.7);
cuerpo5.position.set(-0.5, -2.05, -3.3);
cuerpo5.rotation.z = 0.1;
escena.add(cuerpo5);

const geometrycuerpo6 = new THREE.SphereGeometry(0.7,24,16);
const cuerpo6 = new THREE.Mesh( geometrycuerpo6,cafe);
cuerpo6.scale.set(1.0, 0.68, 0.68);
cuerpo6.position.set(-0.1, -1.95, -3.9);
cuerpo6.rotation.z = 0.25;
escena.add(cuerpo6);

const geometrycuerpo7 = new THREE.SphereGeometry(0.65,24,16);
const cuerpo7 = new THREE.Mesh(geometrycuerpo7,cafe);
cuerpo7.scale.set(0.9, 0.65, 0.65);
cuerpo7.position.set(-0.001, -1.55, -4.4);
cuerpo7.rotation.z = 0.45;
escena.add(cuerpo7);

const geometrycola = new THREE.ConeGeometry(0.2,0.9,20);
const cola = new THREE.Mesh(geometrycola,blanco);
cola.position.set(0.09, -0.76, -4.6);
cola.rotation.z = -0.1;
escena.add(cola);

//Patas
const geometrypata = new THREE.SphereGeometry(0.23,16,12);

const pata1 = new THREE.Mesh(geometrypata,rosa);
pata1.position.set(-2.8, -0.25, 0.2);
escena.add(pata1);

const pata2 = new THREE.Mesh(geometrypata,rosa);
pata2.position.set(-1.6, -0.25, 0.2);
escena.add(pata2);

const pata3 = new THREE.Mesh( geometrypata,rosa);
pata3.position.set(-2.5, -0.9, -0.7);
escena.add(pata3);

const pata4 = new THREE.Mesh(geometrypata,rosa);
pata4.position.set(-1.4, -0.9, -0.7);
escena.add(pata4);

const pata5 = new THREE.Mesh(geometrypata,rosa);
pata5.position.set(-2, -1.7, -1.4);
escena.add(pata5);

const pata6 = new THREE.Mesh(geometrypata,rosa);
pata6.position.set(-1.2, -1.7, -1.3);
escena.add(pata6);

const pata7 = new THREE.Mesh(geometrypata,rosa);
pata7.position.set(-1.5, -2.3, -2.3);
escena.add(pata7);

const pata8 = new THREE.Mesh(geometrypata,rosa);
pata8.position.set(-0.8, -2.3, -2.3);
escena.add(pata8);

const pata9 = new THREE.Mesh(geometrypata,rosa);
pata9.position.set(-0.9, -2.5, -3.2);
escena.add(pata9);

const pata10 = new THREE.Mesh(geometrypata,rosa);
pata10.position.set(-0.3, -2.5, -3.2);
escena.add(pata10);

window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    render.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render.render(escena, camara);
}
animate();