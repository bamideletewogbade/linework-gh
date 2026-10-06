import fs from 'node:fs';
const file='src/components/Hero3D.tsx';let s=fs.readFileSync(file,'utf8').replaceAll('\r','');
s=s.replace("import React, { useEffect, useRef, useState } from 'react';", "import React, { useEffect, useRef, useState } from 'react';\nimport Image from 'next/image';");
s=s.replace("  const [isHovered, setIsHovered] = useState(false);\n\n  const [mounted, setMounted] = useState(false);", "  const explodedRef = useRef(false);\n  const requestRenderRef = useRef<() => void>(() => {});\n  const wireMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);");
s=s.replace('    setMounted(true);\n','');s=s.replace("powerPreference: 'high-performance'", "powerPreference: 'low-power'");
s=s.replace('Math.min(window.devicePixelRatio || 1, 2)','Math.min(window.devicePixelRatio || 1, 1.5)');
s=s.replace('    controls.enableDamping = true;', "    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');\n    controls.enableDamping = !motionPreference.matches;");
s=s.replace('    modelRefs.current.allMeshes = allMeshes;', '    modelRefs.current.allMeshes = allMeshes;\n    const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0x0B0E14, transparent: true, opacity: 0.25 });\n    wireMaterialRef.current = wireframeMaterial;');
s=s.replace('      renderer.setSize(w, h);','      renderer.setSize(w, h);\n      requestRenderRef.current();');
const start=s.indexOf('    // Initial pass to guarantee');const end=s.indexOf('  const setPreset',start);
if(start<0||end<0)throw Error('3D markers missing');
s=s.slice(0,start)+`
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

`+s.slice(end);
s=s.replace("    setActivePreset(preset);", "    setActivePreset(preset);\n    requestRenderRef.current();");
s=s.replace('      onMouseEnter={() => setIsHovered(true)}\n      onMouseLeave={() => setIsHovered(false)}\n','');
s=s.replace('h-[380px] sm:h-[460px] md:h-[540px] lg:h-[600px]','h-[400px] sm:h-[460px] lg:h-[520px]');
s=s.replace('<canvas ref={canvasRef} className="w-full h-full block" />','<canvas ref={canvasRef} aria-label="Interactive architectural model" className="w-full h-full block" />');
s=s.replace(/<img\s+src="\/assets\/villa-cantonments.jpg"\s+alt="Cantonments Villa Architecture"\s+className="w-full h-full object-cover"\s*\/>/, '<Image src="/assets/villa-cantonments.jpg" alt="Courtyard home design inspiration" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />');
s=s.replace('className={`text-[10px]', 'aria-pressed={activePreset === p}\n            className={`min-h-11 text-[10px]');
s=s.replace('hidden sm:flex items-center gap-1.5','hidden 2xl:flex items-center gap-1.5');
s=s.replace('className="flex items-center gap-2"','className="flex flex-wrap items-center gap-2"');
s=s.replaceAll('className={`flex items-center gap-1.5 px-3 py-1.5','className={`flex min-h-11 items-center gap-1.5 px-3 py-2');
s=s.replace('onClick={() => setIsExploded(!isExploded)}','onClick={() => setIsExploded(!isExploded)}\n            aria-pressed={isExploded}');
s=s.replace('onClick={() => setIsWireframe(!isWireframe)}','onClick={() => setIsWireframe(!isWireframe)}\n            aria-pressed={isWireframe}');
s=s.replace('className="hidden sm:flex items-center gap-4','className="flex flex-wrap items-center gap-4');
s=s.replace('<span>MODEL // <strong>ARCHITECTURAL STUDY</strong></span>','<span className="hidden sm:inline">MODEL // <strong>ARCHITECTURAL STUDY</strong></span>');
s=s.replace('className="hover:text-white flex items-center gap-1"','className="min-h-11 px-3 hover:text-white flex items-center gap-1"');
fs.writeFileSync(file,s);
