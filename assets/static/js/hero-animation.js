import * as THREE from 'three';

const canvas = document.getElementById('hero-canvas');
if (!canvas) {
  throw new Error('hero-canvas not found');
}

const container = canvas.parentElement;
let width = container.clientWidth;
let height = container.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
camera.position.z = 2.8;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// ── Neural sphere geometry ──────────────────────────────────────────────────

const N = 280;
const positions = new Float32Array(N * 3);
const colors = new Float32Array(N * 3);

const blue = new THREE.Color('#4CC9F0');
const violet = new THREE.Color('#7C3AED');

// Fibonacci sphere for even distribution
for (let i = 0; i < N; i++) {
  const phi = Math.acos(1 - 2 * (i + 0.5) / N);
  const theta = Math.PI * (1 + Math.sqrt(5)) * i;

  positions[i * 3]     = Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = Math.cos(phi);
  positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta);

  const t = i / N;
  const c = blue.clone().lerp(violet, t * t); // quadratic bias toward blue
  colors[i * 3]     = c.r;
  colors[i * 3 + 1] = c.g;
  colors[i * 3 + 2] = c.b;
}

// Points
const pointGeo = new THREE.BufferGeometry();
pointGeo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
pointGeo.setAttribute('color',    new THREE.BufferAttribute(colors.slice(),    3));

const pointMat = new THREE.PointsMaterial({
  size: 0.022,
  vertexColors: true,
  transparent: true,
  opacity: 0.9,
  sizeAttenuation: true,
});

const points = new THREE.Points(pointGeo, pointMat);
scene.add(points);

// Connections between nearby nodes
const threshold = 0.38;
const linePositions = [];
const lineColors    = [];

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const dx = positions[i * 3]     - positions[j * 3];
    const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
    const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

    if (dist < threshold) {
      linePositions.push(
        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2],
      );
      lineColors.push(
        colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2],
        colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2],
      );
    }
  }
}

const lineGeo = new THREE.BufferGeometry();
lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
lineGeo.setAttribute('color',    new THREE.BufferAttribute(new Float32Array(lineColors),    3));

const lineMat = new THREE.LineBasicMaterial({
  vertexColors: true,
  transparent: true,
  opacity: 0.18,
});

const lines = new THREE.LineSegments(lineGeo, lineMat);
scene.add(lines);

// ── Mouse parallax ──────────────────────────────────────────────────────────

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener('mousemove', (e) => {
  targetX = (e.clientX / window.innerWidth  - 0.5) * 0.6;
  targetY = (e.clientY / window.innerHeight - 0.5) * 0.4;
});

// ── Animation loop ──────────────────────────────────────────────────────────

let elapsed = 0;

function animate() {
  requestAnimationFrame(animate);
  elapsed += 0.004;

  // Smooth mouse follow
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  points.rotation.y = elapsed + currentX;
  points.rotation.x = currentY * 0.5;
  lines.rotation.y  = elapsed + currentX;
  lines.rotation.x  = currentY * 0.5;

  renderer.render(scene, camera);
}

animate();

// Fade in canvas once Three.js is running
canvas.style.opacity = '1';

// ── Resize ──────────────────────────────────────────────────────────────────

window.addEventListener('resize', () => {
  width  = container.clientWidth;
  height = container.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});
