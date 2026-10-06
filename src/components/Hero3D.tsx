'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Layers, Eye, RefreshCw, Compass } from 'lucide-react';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePreset, setActivePreset] = useState<'iso' | 'front' | 'side' | 'top'>('iso');
  const [isExploded, setIsExploded] = useState(false);
  const [isWireframe, setIsWireframe] = useState(false);
  const explodedRef = useRef(false);
  const requestRenderRef = useRef<() => void>(() => {});
  const wireMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  // References to internal Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const flyStateRef = useRef({
    isFlying: false,
    targetCam: new THREE.Vector3(22, 14, 26),
    targetLook: new THREE.Vector3(0, 3.5, 0),
  });
  const modelRefs = useRef<{
    levelUpper: THREE.Group | null;
    levelRoof: THREE.Group | null;
    allMeshes: { mesh: THREE.Mesh; defaultMat: THREE.Material }[];
    archGroup: THREE.Group | null;
  }>({
    levelUpper: null,
    levelRoof: null,
    allMeshes: [],
    archGroup: null,
  });

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    const initialWidth = container.clientWidth || 600;
    const initialHeight = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0E131F);
    scene.fog = new THREE.FogExp2(0x0E131F, 0.02);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      38,
      initialWidth / initialHeight,
      0.1,
      1000
    );
    camera.position.set(22, 14, 26);
    cameraRef.current = camera;

    // Renderer with try-catch for WebGL support
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        powerPreference: 'low-power',
        alpha: false,
      });
      rendererRef.current = renderer;
    } catch (e) {
      console.warn('WebGL initialization failed, falling back:', e);
      setWebglSupported(false);
      return;
    }

    renderer.setSize(initialWidth, initialHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    controls.enableDamping = !motionPreference.matches;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.target.set(0, 3.5, 0);
    // The visitor explicitly opens this viewer before it captures touch gestures.
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    controlsRef.current = controls;

    // Refined Architectural Museum Lighting
    const ambientLight = new THREE.AmbientLight(0xE2E8F0, 0.65);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFF7ED, 1.4);
    sunLight.position.set(24, 36, 18);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const warmAccent = new THREE.PointLight(0xF59E0B, 1.2, 35);
    warmAccent.position.set(-12, 12, -8);
    scene.add(warmAccent);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(50, 40, 0x0284C7, 0x1E293B);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Ground Plane
    const groundGeo = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0E131F,
      roughness: 0.9,
      metalness: 0.1,
    });
    const groundMesh = new THREE.Mesh(groundGeo, groundMat);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    // Master Model Groups
    const archGroup = new THREE.Group();
    scene.add(archGroup);
    modelRefs.current.archGroup = archGroup;

    // Materials
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x64748B, roughness: 0.85, metalness: 0.1 });
    const darkConcreteMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.9, metalness: 0.05 });
    const teakMat = new THREE.MeshStandardMaterial({ color: 0xB45309, roughness: 0.7, metalness: 0.1 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x38BDF8,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.35,
    });
    const wireMat = new THREE.LineBasicMaterial({ color: 0x38BDF8, transparent: true, opacity: 0.8 });
    const amberWireMat = new THREE.LineBasicMaterial({ color: 0xF59E0B, transparent: true, opacity: 0.85 });

    const levelGround = new THREE.Group();
    const levelUpper = new THREE.Group();
    const levelRoof = new THREE.Group();

    archGroup.add(levelGround);
    archGroup.add(levelUpper);
    archGroup.add(levelRoof);

    modelRefs.current.levelUpper = levelUpper;
    modelRefs.current.levelRoof = levelRoof;

    const allMeshes: { mesh: THREE.Mesh; defaultMat: THREE.Material }[] = [];

    const addMesh = (
      geo: THREE.BufferGeometry,
      mat: THREE.Material,
      parent: THREE.Group,
      px = 0, py = 0, pz = 0
    ) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(px, py, pz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      allMeshes.push({ mesh, defaultMat: mat });

      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(edges, mat === teakMat ? amberWireMat : wireMat);
      line.position.copy(mesh.position);
      parent.add(line);
      return mesh;
    };

    // Ground Slabs & Core
    addMesh(new THREE.BoxGeometry(22, 0.6, 16), concreteMat, levelGround, 0, 0.3, 0);
    addMesh(new THREE.BoxGeometry(6, 3.2, 10), concreteMat, levelGround, -6, 2.2, 0);
    addMesh(new THREE.BoxGeometry(4, 3.2, 5), darkConcreteMat, levelGround, 4, 2.2, -3);

    // Columns
    const cols = [
      [-8, 2.2, 6], [-3, 2.2, 6], [2, 2.2, 6], [7, 2.2, 6],
      [-8, 2.2, -6], [-3, 2.2, -6], [2, 2.2, -6], [7, 2.2, -6]
    ];
    cols.forEach(pos => {
      addMesh(new THREE.BoxGeometry(0.5, 3.2, 0.5), darkConcreteMat, levelGround, pos[0], pos[1], pos[2]);
    });

    // Glass Facades
    addMesh(new THREE.BoxGeometry(10, 3.0, 0.1), glassMat, levelGround, 0.5, 2.2, 4.5);
    addMesh(new THREE.BoxGeometry(0.1, 3.0, 8), glassMat, levelGround, 6.5, 2.2, 0);

    // Upper Floor
    addMesh(new THREE.BoxGeometry(24, 0.6, 17), concreteMat, levelUpper, 1, 4.0, 0.5);
    addMesh(new THREE.BoxGeometry(14, 3.2, 11), darkConcreteMat, levelUpper, -2, 5.9, 0);

    // Timber Louvers
    for (let i = 0; i < 16; i++) {
      addMesh(new THREE.BoxGeometry(0.1, 3.0, 0.4), teakMat, levelUpper, -6 + i * 0.85, 5.9, 5.6);
    }

    // Upper Glass
    addMesh(new THREE.BoxGeometry(11, 2.9, 0.1), glassMat, levelUpper, 4, 5.9, 3.5);

    // Roof Slab
    addMesh(new THREE.BoxGeometry(26, 0.5, 19), darkConcreteMat, levelRoof, 1.2, 7.8, 0.8);
    addMesh(new THREE.BoxGeometry(10, 0.3, 8), concreteMat, levelRoof, -1.5, 8.2, 0);

    modelRefs.current.allMeshes = allMeshes;
    const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x0B0E14, transparent: true, opacity: 0.25 });
    wireMaterialRef.current = wireframeMaterial;

    // Handle Container Resize with ResizeObserver
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth || 600;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      requestRenderRef.current();
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(container);
    }
    window.addEventListener('resize', handleResize);


    // Render only after interaction, a resize, or an animation update.
    let isVisible = true;
    let disposed = false;
    let animId = 0;
    const requestRender = () => {
      if (!disposed && isVisible && !document.hidden && !animId) animId = requestAnimationFrame(animate);
    };
    const animate = () => {
      animId = 0;
      if (disposed || !isVisible || document.hidden) return;
      const factor = motionPreference.matches ? 1 : 0.12;
      const upperTarget = explodedRef.current ? 3.5 : 0;
      const roofTarget = explodedRef.current ? 7.5 : 0;
      levelUpper.position.y += (upperTarget - levelUpper.position.y) * factor;
      levelRoof.position.y += (roofTarget - levelRoof.position.y) * factor;
      if (flyStateRef.current.isFlying) {
        camera.position.lerp(flyStateRef.current.targetCam, factor);
        controls.target.lerp(flyStateRef.current.targetLook, factor);
        if (camera.position.distanceTo(flyStateRef.current.targetCam) < 0.05) flyStateRef.current.isFlying = false;
      }
      controls.update();
      renderer.render(scene, camera);
      if (flyStateRef.current.isFlying || Math.abs(levelUpper.position.y - upperTarget) > 0.001 || Math.abs(levelRoof.position.y - roofTarget) > 0.001) requestRender();
    };
    requestRenderRef.current = requestRender;
    controls.addEventListener('change', requestRender);
    const stopOrRender = () => {
      if (!isVisible || document.hidden) { cancelAnimationFrame(animId); animId = 0; }
      else requestRender();
    };
    const observer = new IntersectionObserver(entries => { isVisible = entries[0].isIntersecting; stopOrRender(); });
    observer.observe(container);
    document.addEventListener('visibilitychange', stopOrRender);
    const onMotionChange = () => { controls.enableDamping = !motionPreference.matches; requestRender(); };
    motionPreference.addEventListener('change', onMotionChange);
    requestRender();
    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
      observer.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', stopOrRender);
      motionPreference.removeEventListener('change', onMotionChange);
      controls.removeEventListener('change', requestRender);
      controls.dispose();
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>([wireframeMaterial]);
      scene.traverse(object => {
        const item = object as THREE.Mesh;
        if (item.geometry) geometries.add(item.geometry);
        if (item.material) (Array.isArray(item.material) ? item.material : [item.material]).forEach(material => materials.add(material));
      });
      allMeshes.forEach(item => materials.add(item.defaultMat));
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      renderer.dispose();
      requestRenderRef.current = () => {};
      modelRefs.current.allMeshes = [];
    };
  }, []);

  useEffect(() => { explodedRef.current = isExploded; requestRenderRef.current(); }, [isExploded]);
  useEffect(() => {
    modelRefs.current.allMeshes.forEach(item => { item.mesh.material = isWireframe && wireMaterialRef.current ? wireMaterialRef.current : item.defaultMat; });
    requestRenderRef.current();
  }, [isWireframe]);

  const setPreset = (preset: 'iso' | 'front' | 'side' | 'top') => {
    setActivePreset(preset);
    requestRenderRef.current();
    flyStateRef.current.isFlying = true;

    if (preset === 'iso') {
      flyStateRef.current.targetCam.set(22, 14, 26);
      flyStateRef.current.targetLook.set(0, 3.5, 0);
    } else if (preset === 'front') {
      flyStateRef.current.targetCam.set(0, 4.5, 32);
      flyStateRef.current.targetLook.set(0, 4, 0);
    } else if (preset === 'side') {
      flyStateRef.current.targetCam.set(32, 4.5, 0);
      flyStateRef.current.targetLook.set(0, 4, 0);
    } else if (preset === 'top') {
      flyStateRef.current.targetCam.set(0, 36, 0.1);
      flyStateRef.current.targetLook.set(0, 0, 0);
    }
  };

  if (!webglSupported) return <div className="relative h-[320px] overflow-hidden rounded-3xl"><Image src="/assets/villa-cantonments.jpg" alt="Courtyard home design inspiration" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" /><p role="status" className="absolute inset-x-0 bottom-0 bg-ink-950/90 p-5 text-sm text-white">The 3D viewer is unavailable on this device. You can still explore the design inspiration.</p></div>;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[460px] lg:h-[520px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0E131F] shadow-2xl touch-pan-y"
    >
      {/* 3D Canvas */}
      {webglSupported ? (
        <canvas ref={canvasRef} aria-label="Interactive architectural model" className="w-full h-full block" />
      ) : (
        <div className="absolute inset-0 bg-[#0E131F]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image src="/assets/villa-cantonments.jpg" alt="Courtyard home design inspiration" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
        </div>
      )}

      {/* Top Left Perspective Presets */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-1.5 z-10 flex-wrap">
        {(['iso', 'front', 'side', 'top'] as const).map(p => (
          <button
            key={p}
            type="button"
            onClick={() => setPreset(p)}
            aria-pressed={activePreset === p}
            className={`min-h-11 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1.5 rounded-full transition-all ${
              activePreset === p
                ? 'bg-brand text-ink-950 font-bold shadow'
                : 'bg-black/60 text-stone-300 border border-white/10 hover:border-brand/50 backdrop-blur'
            }`}
          >
            {p === 'iso' ? 'Isometric' : p === 'front' ? 'Front' : p === 'side' ? 'Side' : 'Plan'}
          </button>
        ))}
      </div>

      {/* Top Right Instruction Tag */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur border border-white/10 text-stone-300 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1.5 rounded-full pointer-events-none hidden 2xl:flex items-center gap-1.5">
        <Compass size={12} className="text-brand" />
        <span>Drag to Orbit &middot; Scroll to Zoom</span>
      </div>

      {/* Bottom Architectural Inspection Bar */}
      {/* One compact row on phones so the controls never cover most of the model. */}
      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/80 backdrop-blur-md border border-white/10 p-1.5 sm:p-2.5 rounded-2xl grid grid-cols-3 gap-1.5 sm:flex sm:items-center sm:justify-between sm:gap-2 text-xs font-mono">
        <div className="contents sm:flex sm:items-center sm:gap-2">
          <button
            type="button"
            onClick={() => setIsExploded(!isExploded)}
            aria-pressed={isExploded}
            className={`flex min-h-11 items-center justify-center gap-1.5 px-1 sm:px-3 py-2 rounded-full text-[11px] uppercase sm:tracking-wider transition-all ${
              isExploded
                ? 'bg-brand text-ink-950 font-bold'
                : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            <Layers size={13} className="hidden sm:block" />
            <span>{isExploded ? 'Collapse' : 'Explode'}<span className="hidden sm:inline"> Levels</span></span>
          </button>

          <button
            type="button"
            onClick={() => setIsWireframe(!isWireframe)}
            aria-pressed={isWireframe}
            className={`flex min-h-11 items-center justify-center gap-1.5 px-1 sm:px-3 py-2 rounded-full text-[11px] uppercase sm:tracking-wider transition-all ${
              isWireframe
                ? 'bg-sky-400 text-ink-950 font-bold'
                : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            <Eye size={13} className="hidden sm:block" />
            <span>{isWireframe ? 'Solid' : 'Blueprint'}<span className="hidden sm:inline"> Mode</span></span>
          </button>
        </div>

        <div className="contents sm:flex sm:items-center sm:gap-4 text-stone-400 text-[10px] uppercase tracking-widest">
          <span className="hidden sm:inline">MODEL // <strong>ARCHITECTURAL STUDY</strong></span>
          <button
            type="button"
            onClick={() => setPreset('iso')}
            className="min-h-11 px-1 sm:px-3 rounded-full bg-white/10 sm:bg-transparent text-stone-300 sm:text-stone-400 text-[11px] sm:text-[10px] uppercase hover:text-white flex items-center justify-center gap-1"
            title="Reset Model Orientation"
          >
            <RefreshCw size={11} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
