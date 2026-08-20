import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for touch / mobile devices or reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      -window.innerHeight / 2,
      1,
      1000
    );
    camera.position.z = 10;

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
    renderer.domElement.style.zIndex = '50';
    container.appendChild(renderer.domElement);

    // Mouse coordinates in screen space & 3D space
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      vx: 0,
      vy: 0,
      prevX: -2000,
      prevY: -2000,
      isHoveringInteractive: false,
    };

    // 1. Particle Trail System (Points with custom dynamic geometry)
    const MAX_PARTICLES = 300;
    const particlePositions = new Float32Array(MAX_PARTICLES * 3);
    const particleColors = new Float32Array(MAX_PARTICLES * 3);
    const particleSizes = new Float32Array(MAX_PARTICLES);
    const particleLifetimes = new Float32Array(MAX_PARTICLES);
    const particleVelocities: Array<{ vx: number; vy: number; vz: number }> = [];

    for (let i = 0; i < MAX_PARTICLES; i++) {
      particlePositions[i * 3] = -9999;
      particlePositions[i * 3 + 1] = -9999;
      particlePositions[i * 3 + 2] = 0;
      particleColors[i * 3] = 0.06; // Emerald R
      particleColors[i * 3 + 1] = 0.72; // G
      particleColors[i * 3 + 2] = 0.51; // B
      particleSizes[i] = 0;
      particleLifetimes[i] = 0;
      particleVelocities.push({ vx: 0, vy: 0, vz: 0 });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

    // Custom Canvas Texture for glowing circular particle
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.25, 'rgba(52, 211, 153, 0.8)');
        gradient.addColorStop(0.6, 'rgba(6, 182, 212, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 18,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    let particleIndex = 0;
    const spawnParticle = (x: number, y: number, vx = 0, vy = 0, speed = 1, isBurst = false) => {
      const idx = particleIndex % MAX_PARTICLES;
      particleIndex++;

      particlePositions[idx * 3] = x;
      particlePositions[idx * 3 + 1] = y;
      particlePositions[idx * 3 + 2] = (Math.random() - 0.5) * 20;

      const angle = Math.random() * Math.PI * 2;
      const force = isBurst ? Math.random() * 8 + 3 : Math.random() * 2 + 0.5;

      particleVelocities[idx] = {
        vx: vx * 0.2 + Math.cos(angle) * force,
        vy: vy * 0.2 + Math.sin(angle) * force,
        vz: (Math.random() - 0.5) * 2,
      };

      // Color Palette: Emerald to Cyan / Purple
      const colorType = Math.random();
      if (colorType > 0.6) {
        // Emerald
        particleColors[idx * 3] = 0.2;
        particleColors[idx * 3 + 1] = 0.85;
        particleColors[idx * 3 + 2] = 0.55;
      } else if (colorType > 0.2) {
        // Cyan
        particleColors[idx * 3] = 0.05;
        particleColors[idx * 3 + 1] = 0.75;
        particleColors[idx * 3 + 2] = 0.95;
      } else {
        // Violet / Amber accent
        particleColors[idx * 3] = 0.7;
        particleColors[idx * 3 + 1] = 0.4;
        particleColors[idx * 3 + 2] = 0.95;
      }

      particleLifetimes[idx] = isBurst ? 1.0 : 0.85;
      particleSizes[idx] = (Math.random() * 12 + 8) * (isBurst ? 1.4 : 1);
    };

    // 2. 3D Geometric Orbit Ring around cursor
    const ringGeometry = new THREE.TorusGeometry(18, 0.8, 16, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const cursorRing = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(cursorRing);

    // 3. Central Geometric Crystal (Icosahedron)
    const crystalGeometry = new THREE.IcosahedronGeometry(4, 0);
    const crystalMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const cursorCrystal = new THREE.Mesh(crystalGeometry, crystalMaterial);
    scene.add(cursorCrystal);

    // Track Mouse Move
    const onMouseMove = (e: MouseEvent) => {
      // Convert screen coordinates to Three.js centered coordinates
      mouse.targetX = e.clientX - window.innerWidth / 2;
      mouse.targetY = -(e.clientY - window.innerHeight / 2);

      // Check if hovering interactive element (buttons, links, inputs)
      const target = e.target as HTMLElement | null;
      mouse.isHoveringInteractive = !!target?.closest('a, button, input, textarea, [role="button"]');
    };

    // Track Mouse Click for Supernova 3D Burst
    const onMouseDown = (e: MouseEvent) => {
      const clickX = e.clientX - window.innerWidth / 2;
      const clickY = -(e.clientY - window.innerHeight / 2);

      for (let i = 0; i < 40; i++) {
        spawnParticle(clickX, clickY, 0, 0, 5, true);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);

    // Resize Handler
    const onResize = () => {
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp mouse coordinates
      mouse.vx = (mouse.targetX - mouse.x) * 0.22;
      mouse.vy = (mouse.targetY - mouse.y) * 0.22;
      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);

      // Position Ring & Crystal
      cursorRing.position.set(mouse.x, mouse.y, 0);
      cursorCrystal.position.set(mouse.x, mouse.y, 0);

      // Rotate 3D Geometry
      cursorRing.rotation.x = elapsedTime * 2;
      cursorRing.rotation.y = elapsedTime * 1.5;
      cursorCrystal.rotation.x = -elapsedTime * 3;
      cursorCrystal.rotation.y = elapsedTime * 2.5;

      // Scale up when hovering buttons / links
      const targetScale = mouse.isHoveringInteractive ? 1.6 : Math.min(1 + speed * 0.02, 1.4);
      cursorRing.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
      cursorRing.material.color.setHex(mouse.isHoveringInteractive ? 0x22d3ee : 0x34d399);

      // Spawn motion trail particles when moving
      if (speed > 1.2 && mouse.x > -1500) {
        const spawnCount = Math.min(Math.floor(speed / 4) + 1, 4);
        for (let i = 0; i < spawnCount; i++) {
          spawnParticle(
            mouse.x + (Math.random() - 0.5) * 6,
            mouse.y + (Math.random() - 0.5) * 6,
            mouse.vx,
            mouse.vy,
            speed
          );
        }
      }

      // Update Particle Physics & Decay
      const positions = particleGeometry.attributes.position.array as Float32Array;
      const colors = particleGeometry.attributes.color.array as Float32Array;

      for (let i = 0; i < MAX_PARTICLES; i++) {
        if (particleLifetimes[i] > 0) {
          particleLifetimes[i] -= delta * 1.4;

          positions[i * 3] += particleVelocities[i].vx;
          positions[i * 3 + 1] += particleVelocities[i].vy;
          positions[i * 3 + 2] += particleVelocities[i].vz;

          particleVelocities[i].vx *= 0.94;
          particleVelocities[i].vy *= 0.94;

          // Fade particle alpha through color intensity
          const life = Math.max(particleLifetimes[i], 0);
          colors[i * 3] *= 0.96;
          colors[i * 3 + 1] *= 0.96;
          colors[i * 3 + 2] *= 0.96;

          if (particleLifetimes[i] <= 0) {
            positions[i * 3] = -9999;
            positions[i * 3 + 1] = -9999;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      particleGeometry.attributes.color.needsUpdate = true;

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
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      crystalGeometry.dispose();
      crystalMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden" />;
};
