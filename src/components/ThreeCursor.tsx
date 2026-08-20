import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for touch / mobile devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.zIndex = '9999';
    container.appendChild(renderer.domElement);

    // Mouse coordinates in centered WebGL space
    const mouse = {
      targetX: -9999,
      targetY: -9999,
      x: -9999,
      y: -9999,
      vx: 0,
      vy: 0,
      isHovering: false,
    };

    // -------------------------------------------------------------
    // 1. Fluid Neon Plasma Ribbon (Smooth Triangle-Strip Mesh Trail)
    // -------------------------------------------------------------
    const TRAIL_LENGTH = 36;
    const history: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      history.push({ x: -9999, y: -9999 });
    }

    // A ribbon is made of (TRAIL_LENGTH - 1) quads = (TRAIL_LENGTH - 1) * 2 triangles
    const ribbonVertexCount = TRAIL_LENGTH * 2;
    const ribbonPositions = new Float32Array(ribbonVertexCount * 3);
    const ribbonColors = new Float32Array(ribbonVertexCount * 3);
    const ribbonIndices: number[] = [];

    for (let i = 0; i < TRAIL_LENGTH - 1; i++) {
      const topCurrent = i * 2;
      const bottomCurrent = i * 2 + 1;
      const topNext = (i + 1) * 2;
      const bottomNext = (i + 1) * 2 + 1;

      ribbonIndices.push(topCurrent, bottomCurrent, topNext);
      ribbonIndices.push(bottomCurrent, bottomNext, topNext);
    }

    const ribbonGeometry = new THREE.BufferGeometry();
    ribbonGeometry.setAttribute('position', new THREE.BufferAttribute(ribbonPositions, 3));
    ribbonGeometry.setAttribute('color', new THREE.BufferAttribute(ribbonColors, 3));
    ribbonGeometry.setIndex(ribbonIndices);

    const ribbonMaterial = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const ribbonMesh = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    scene.add(ribbonMesh);

    // -------------------------------------------------------------
    // 2. Bioluminescent Quantum Sparkle Orbiters (Logarithmic Vortex)
    // -------------------------------------------------------------
    const ORBITER_COUNT = 60;
    const orbiterPositions = new Float32Array(ORBITER_COUNT * 3);
    const orbiterColors = new Float32Array(ORBITER_COUNT * 3);
    const orbiterParams: Array<{
      radius: number;
      speed: number;
      angle: number;
      yOffset: number;
      colorIndex: number;
    }> = [];

    for (let i = 0; i < ORBITER_COUNT; i++) {
      orbiterPositions[i * 3] = -9999;
      orbiterPositions[i * 3 + 1] = -9999;
      orbiterPositions[i * 3 + 2] = 0;

      orbiterParams.push({
        radius: Math.random() * 28 + 6,
        speed: (Math.random() * 2 + 1.5) * (Math.random() > 0.5 ? 1 : -1),
        angle: Math.random() * Math.PI * 2,
        yOffset: (Math.random() - 0.5) * 15,
        colorIndex: Math.random(),
      });

      // Neon Gradient Palette: Emerald -> Cyan -> Purple
      const col = orbiterParams[i].colorIndex;
      if (col > 0.6) {
        orbiterColors[i * 3] = 0.2;
        orbiterColors[i * 3 + 1] = 0.95;
        orbiterColors[i * 3 + 2] = 0.6; // Emerald
      } else if (col > 0.3) {
        orbiterColors[i * 3] = 0.1;
        orbiterColors[i * 3 + 1] = 0.85;
        orbiterColors[i * 3 + 2] = 1.0; // Electric Cyan
      } else {
        orbiterColors[i * 3] = 0.75;
        orbiterColors[i * 3 + 1] = 0.45;
        orbiterColors[i * 3 + 2] = 1.0; // Violet
      }
    }

    const orbiterGeometry = new THREE.BufferGeometry();
    orbiterGeometry.setAttribute('position', new THREE.BufferAttribute(orbiterPositions, 3));
    orbiterGeometry.setAttribute('color', new THREE.BufferAttribute(orbiterColors, 3));

    // Particle Texture
    const createSparkleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(52, 211, 153, 0.9)');
        gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.4)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const orbiterMaterial = new THREE.PointsMaterial({
      size: 14,
      map: createSparkleTexture(),
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const orbiterPoints = new THREE.Points(orbiterGeometry, orbiterMaterial);
    scene.add(orbiterPoints);

    // -------------------------------------------------------------
    // 3. Central Neon Core Glow Pulse
    // -------------------------------------------------------------
    const coreGeometry = new THREE.BufferGeometry();
    coreGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
    const coreMaterial = new THREE.PointsMaterial({
      size: 32,
      map: createSparkleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const corePoint = new THREE.Points(coreGeometry, coreMaterial);
    scene.add(corePoint);

    // -------------------------------------------------------------
    // 4. Click Shockwave Shock-Rings Pool
    // -------------------------------------------------------------
    const shockwaves: Array<{
      mesh: THREE.Mesh;
      scale: number;
      opacity: number;
      active: boolean;
    }> = [];

    const shockwaveGeo = new THREE.RingGeometry(2, 6, 48);
    for (let i = 0; i < 5; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0x34d399,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(shockwaveGeo, mat);
      mesh.visible = false;
      scene.add(mesh);
      shockwaves.push({ mesh, scale: 1, opacity: 0, active: false });
    }

    let shockwaveIndex = 0;
    const triggerShockwave = (x: number, y: number) => {
      const sw = shockwaves[shockwaveIndex % shockwaves.length];
      shockwaveIndex++;
      sw.mesh.position.set(x, y, 0);
      sw.scale = 1;
      sw.opacity = 1;
      sw.active = true;
      sw.mesh.visible = true;
      sw.mesh.scale.set(1, 1, 1);
      (sw.mesh.material as THREE.MeshBasicMaterial).opacity = 1;
    };

    // Event Listeners
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX - window.innerWidth / 2;
      mouse.targetY = -(e.clientY - window.innerHeight / 2);

      const target = e.target as HTMLElement | null;
      mouse.isHovering = !!target?.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
    };

    const onMouseDown = (e: MouseEvent) => {
      const clickX = e.clientX - window.innerWidth / 2;
      const clickY = -(e.clientY - window.innerHeight / 2);
      triggerShockwave(clickX, clickY);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);

    const onResize = () => {
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // -------------------------------------------------------------
    // Animation Loop
    // -------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth lag follower
      if (mouse.x === -9999) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
        for (let i = 0; i < TRAIL_LENGTH; i++) {
          history[i] = { x: mouse.x, y: mouse.y };
        }
      } else {
        mouse.vx = (mouse.targetX - mouse.x) * 0.35;
        mouse.vy = (mouse.targetY - mouse.y) * 0.35;
        mouse.x += mouse.vx;
        mouse.y += mouse.vy;
      }

      // Update trail history with spring physics
      history[0] = { x: mouse.x, y: mouse.y };
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const spring = 0.58;
        history[i].x += (history[i - 1].x - history[i].x) * spring;
        history[i].y += (history[i - 1].y - history[i].y) * spring;
      }

      // 1. Build Fluid Neon Ribbon Mesh
      const positions = ribbonGeometry.attributes.position.array as Float32Array;
      const colors = ribbonGeometry.attributes.color.array as Float32Array;

      const baseWidth = mouse.isHovering ? 18 : 12;

      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const p = history[i];
        const next = history[Math.min(i + 1, TRAIL_LENGTH - 1)];

        // Compute normal perpendicular to velocity vector
        let dx = next.x - p.x;
        let dy = next.y - p.y;
        let len = Math.sqrt(dx * dx + dy * dy);
        if (len < 0.001) {
          dx = 0;
          dy = 1;
          len = 1;
        }
        const nx = -dy / len;
        const ny = dx / len;

        // Taper width from head (1.0) to tail (0.0)
        const progress = 1 - i / (TRAIL_LENGTH - 1);
        const width = baseWidth * progress * (1 + Math.sin(time * 6 + i * 0.4) * 0.15);

        // Top vertex
        positions[i * 6] = p.x + nx * width;
        positions[i * 6 + 1] = p.y + ny * width;
        positions[i * 6 + 2] = 0;

        // Bottom vertex
        positions[i * 6 + 3] = p.x - nx * width;
        positions[i * 6 + 4] = p.y - ny * width;
        positions[i * 6 + 5] = 0;

        // Neon Glow Color Fade along length
        // Emerald (#10b981) -> Electric Cyan (#06b6d4) -> Purple (#a855f7) -> Translucent Tail
        const r = progress * (0.1 + (1 - progress) * 0.8);
        const g = progress * 0.95;
        const b = progress * (0.5 + progress * 0.5);

        colors[i * 6] = r;
        colors[i * 6 + 1] = g;
        colors[i * 6 + 2] = b;

        colors[i * 6 + 3] = r;
        colors[i * 6 + 4] = g;
        colors[i * 6 + 5] = b;
      }

      ribbonGeometry.attributes.position.needsUpdate = true;
      ribbonGeometry.attributes.color.needsUpdate = true;

      // 2. Animate Quantum Orbiters swirling around cursor
      const orbPositions = orbiterGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < ORBITER_COUNT; i++) {
        const param = orbiterParams[i];
        param.angle += param.speed * delta * (mouse.isHovering ? 2.5 : 1.5);

        const currentRadius = param.radius * (mouse.isHovering ? 1.6 : 1.0);
        const ox = mouse.x + Math.cos(param.angle) * currentRadius;
        const oy = mouse.y + Math.sin(param.angle) * currentRadius + Math.sin(time * 3 + i) * 3;

        orbPositions[i * 3] = ox;
        orbPositions[i * 3 + 1] = oy;
        orbPositions[i * 3 + 2] = Math.sin(param.angle) * 10;
      }
      orbiterGeometry.attributes.position.needsUpdate = true;

      // 3. Central Core Glow Position & Pulse
      const corePos = coreGeometry.attributes.position.array as Float32Array;
      corePos[0] = mouse.x;
      corePos[1] = mouse.y;
      corePos[2] = 0;
      coreGeometry.attributes.position.needsUpdate = true;
      coreMaterial.size = mouse.isHovering ? 48 + Math.sin(time * 8) * 8 : 32 + Math.sin(time * 5) * 5;

      // 4. Animate Shockwaves on Click
      for (let i = 0; i < shockwaves.length; i++) {
        const sw = shockwaves[i];
        if (sw.active) {
          sw.scale += delta * 75;
          sw.opacity -= delta * 2.2;
          sw.mesh.scale.set(sw.scale, sw.scale, 1);
          (sw.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(sw.opacity, 0);

          if (sw.opacity <= 0) {
            sw.active = false;
            sw.mesh.visible = false;
          }
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ribbonGeometry.dispose();
      ribbonMaterial.dispose();
      orbiterGeometry.dispose();
      orbiterMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      shockwaveGeo.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden" />;
};
