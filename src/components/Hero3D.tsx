'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  // References to internal Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
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

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0B0E14);
    scene.fog = new THREE.FogExp2(0x0B0E14, 0.02);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(22, 14, 26);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.target.set(0, 3.5, 0);
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

    // Handle Window Resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver to pause rendering when offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      entries => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Render Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      // Explode Lerp
      const upperTargetY = isExploded ? 3.5 : 0;
      const roofTargetY = isExploded ? 7.5 : 0;
      if (levelUpper) levelUpper.position.y += (upperTargetY - levelUpper.position.y) * 0.08;
      if (levelRoof) levelRoof.position.y += (roofTargetY - levelRoof.position.y) * 0.08;

      // Smooth Camera Fly Easing
      if (flyStateRef.current.isFlying && cameraRef.current && controlsRef.current) {
        cameraRef.current.position.lerp(flyStateRef.current.targetCam, 0.08);
        controlsRef.current.target.lerp(flyStateRef.current.targetLook, 0.08);
        if (cameraRef.current.position.distanceTo(flyStateRef.current.targetCam) < 0.05) {
          flyStateRef.current.isFlying = false;
        }
      }

      // Gentle auto-rotation when idle
      if (!isHovered && !flyStateRef.current.isFlying && archGroup) {
        archGroup.rotation.y += 0.0015;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isExploded, isHovered]);

  // Update wireframe mode
  useEffect(() => {
    const allMeshes = modelRefs.current.allMeshes;
    allMeshes.forEach(item => {
      if (isWireframe) {
        item.mesh.material = new THREE.MeshBasicMaterial({
          color: 0x0B0E14,
          transparent: true,
          opacity: 0.25,
        });
      } else {
        item.mesh.material = item.defaultMat;
      }
    });
  }, [isWireframe]);

  const setPreset = (preset: 'iso' | 'front' | 'side' | 'top') => {
    setActivePreset(preset);
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

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[400px] md:h-[540px] lg:h-[620px] rounded-lg overflow-hidden border border-white/10 bg-[#0B0E14] shadow-2xl touch-pan-y"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top Left Perspective Presets */}
      <div className="absolute top-4 left-4 flex gap-1.5 z-10 flex-wrap">
        {(['iso', 'front', 'side', 'top'] as const).map(p => (
          <button
            key={p}
            type="button"
            onClick={() => setPreset(p)}
            className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1.5 rounded transition-all ${
              activePreset === p
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-black/60 text-stone-300 border border-white/10 hover:border-amber-500/50'
            }`}
          >
            {p === 'iso' ? 'Isometric' : p === 'front' ? 'Front' : p === 'side' ? 'Side' : 'Plan'}
          </button>
        ))}
      </div>

      {/* Top Right Instruction Tag */}
      <div className="absolute top-4 right-4 bg-black/60 border border-white/10 text-stone-400 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded pointer-events-none hidden sm:flex items-center gap-1.5">
        <Compass size={12} className="text-amber-500" />
        <span>Drag to Orbit &middot; Scroll to Zoom</span>
      </div>

      {/* Bottom Architectural Inspection Bar */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-2.5 rounded flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsExploded(!isExploded)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] uppercase tracking-wider transition-all ${
              isExploded
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            <Layers size={13} />
            <span>{isExploded ? 'Collapse Levels' : 'Explode Levels'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsWireframe(!isWireframe)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[11px] uppercase tracking-wider transition-all ${
              isWireframe
                ? 'bg-sky-400 text-stone-950 font-bold'
                : 'bg-white/10 text-stone-300 hover:bg-white/20'
            }`}
          >
            <Eye size={13} />
            <span>{isWireframe ? 'Solid Mode' : 'Blueprint Mode'}</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-stone-400 text-[10px] uppercase tracking-widest">
          <span>MODEL // <strong>CANTONMENTS VILLA (1:50)</strong></span>
          <button
            type="button"
            onClick={() => setPreset('iso')}
            className="hover:text-white flex items-center gap-1"
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
