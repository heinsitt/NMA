import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NetworkScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 760;
    const NODE_COUNT = isMobile ? 65 : 120;
    const LINK_DIST = isMobile ? 26 : 32;
    const SPREAD = { x: 115, y: 75, z: 60 };

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05080c, 0.012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      450
    );
    camera.position.set(0, 0, 85);

    /* Main Drift Nodes */
    const basePos: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      basePos.push(
        (Math.random() - 0.5) * SPREAD.x * 2,
        (Math.random() - 0.5) * SPREAD.y * 2,
        (Math.random() - 0.5) * SPREAD.z * 2
      );
    }
    const pGeo = new THREE.BufferGeometry();
    const pArr = new Float32Array(NODE_COUNT * 3);
    pGeo.setAttribute('position', new THREE.BufferAttribute(pArr, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 1.8,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const pointsMesh = new THREE.Points(pGeo, pMat);
    scene.add(pointsMesh);

    /* Amber / Teal Core Hub Nodes */
    const coreCount = 7;
    const cGeo = new THREE.BufferGeometry();
    const cArr = new Float32Array(coreCount * 3);
    cGeo.setAttribute('position', new THREE.BufferAttribute(cArr, 3));
    const cMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 3.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const coreMesh = new THREE.Points(cGeo, cMat);
    scene.add(coreMesh);

    const coreIdx: number[] = [];
    while (coreIdx.length < coreCount) {
      const r = Math.floor(Math.random() * NODE_COUNT);
      if (!coreIdx.includes(r)) coreIdx.push(r);
    }

    /* Proximity Interconnection Links */
    const maxLinks = NODE_COUNT * 8;
    const lGeo = new THREE.BufferGeometry();
    const lArr = new Float32Array(maxLinks * 6);
    lGeo.setAttribute('position', new THREE.BufferAttribute(lArr, 3));
    const lMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
    });
    const linesMesh = new THREE.LineSegments(lGeo, lMat);
    scene.add(linesMesh);

    /* Interaction State */
    let mouseX = 0;
    let mouseY = 0;
    let tMouseX = 0;
    let tMouseY = 0;
    let scrollP = 0;
    let tScrollP = 0;

    const handleMouseMove = (e: MouseEvent) => {
      tMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      tMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      tScrollP = scrollHeight > 0 ? Math.min(window.scrollY / scrollHeight, 1) : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    let visible = true;
    const handleVisibilityChange = () => {
      visible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animId: number;

    function animate() {
      animId = requestAnimationFrame(animate);
      if (!visible) return;

      const t = clock.getElapsedTime();
      mouseX += (tMouseX - mouseX) * 0.04;
      scrollP += (tScrollP - scrollP) * 0.05;

      /* Gentle harmonic drift */
      for (let i = 0; i < NODE_COUNT; i++) {
        const ix = i * 3;
        const ph = i * 0.7;
        pArr[ix] = basePos[ix] + Math.sin(t * 0.22 + ph) * 3.4;
        pArr[ix + 1] = basePos[ix + 1] + Math.cos(t * 0.18 + ph * 1.3) * 2.8;
        pArr[ix + 2] = basePos[ix + 2] + Math.sin(t * 0.15 + ph * 0.9) * 2.4;
      }
      pGeo.attributes.position.needsUpdate = true;

      /* Hub nodes follow their parent */
      for (let k = 0; k < coreCount; k++) {
        const src = coreIdx[k] * 3;
        const dst = k * 3;
        cArr[dst] = pArr[src];
        cArr[dst + 1] = pArr[src + 1];
        cArr[dst + 2] = pArr[src + 2];
      }
      cGeo.attributes.position.needsUpdate = true;

      /* Recompute proximity links */
      let li = 0;
      const maxD2 = LINK_DIST * LINK_DIST;
      for (let i = 0; i < NODE_COUNT && li < maxLinks; i++) {
        for (let j = i + 1; j < NODE_COUNT && li < maxLinks; j++) {
          const dx = pArr[i * 3] - pArr[j * 3];
          const dy = pArr[i * 3 + 1] - pArr[j * 3 + 1];
          const dz = pArr[i * 3 + 2] - pArr[j * 3 + 2];
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < maxD2) {
            const o = li * 6;
            lArr[o] = pArr[i * 3];
            lArr[o + 1] = pArr[i * 3 + 1];
            lArr[o + 2] = pArr[i * 3 + 2];
            lArr[o + 3] = pArr[j * 3];
            lArr[o + 4] = pArr[j * 3 + 1];
            lArr[o + 5] = pArr[j * 3 + 2];
            li++;
          }
        }
      }
      lGeo.setDrawRange(0, li * 2);
      lGeo.attributes.position.needsUpdate = true;

      /* Smooth Parallax Camera Motion & Scroll Dolly */
      camera.position.x += (mouseX * 7.5 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 5.5 + scrollP * -6.5 - camera.position.y) * 0.04;
      camera.position.z = 85 - scrollP * 36;
      camera.rotation.y = -mouseX * 0.055;
      camera.rotation.x = -mouseY * 0.04 + scrollP * 0.08;
      camera.lookAt(0, scrollP * -8, 0);

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      pGeo.dispose();
      pMat.dispose();
      cGeo.dispose();
      cMat.dispose();
      lGeo.dispose();
      lMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="scene" ref={canvasRef} aria-hidden="true" />;
};
