import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * UnevenColorReveal Component
 * Ultra-smooth, GPU-accelerated interactive Canvas overlay.
 * An organic, uneven fluid liquid shape reveals the full vibrant color
 * image ONLY when the user is actively hovering on the screen.
 * When not hovering, it completely vanishes (leaving a pure black-and-white base).
 */
export default function UnevenColorReveal({
  imageSrc = '/model-hero.jpg',
  revealRadius = 195,
  focalPoint = { desktop: { x: 0.32, y: 0.5 }, mobile: { x: 0.5, y: 0.5 } },
  className = '',
  onCursorUpdate = null
}) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const imgRef = useRef(null);

  // Physics & hover state
  const posRef = useRef({
    currentX: typeof window !== 'undefined' ? window.innerWidth * 0.5 : 400,
    currentY: typeof window !== 'undefined' ? window.innerHeight * 0.5 : 300,
    targetX: typeof window !== 'undefined' ? window.innerWidth * 0.5 : 400,
    targetY: typeof window !== 'undefined' ? window.innerHeight * 0.5 : 300,
    isHovering: false,
    hoverProgress: 0, // 0 = fully hidden (pure B&W), 1 = fully revealed
    speed: 0,
    hasEverHovered: false
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  // Load color image into memory
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imgRef.current = img;
      setImageLoaded(true);
    };
  }, [imageSrc]);

  // Pointer move handler
  const handlePointerMove = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    if (!posRef.current.hasEverHovered) {
      posRef.current.currentX = clientX;
      posRef.current.currentY = clientY;
      posRef.current.hasEverHovered = true;
    }

    posRef.current.targetX = clientX;
    posRef.current.targetY = clientY;
    posRef.current.isHovering = true;

    if (onCursorUpdate) {
      onCursorUpdate({ x: clientX, y: clientY, isHovering: true });
    }
  }, [onCursorUpdate]);

  const handlePointerEnter = useCallback((e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    posRef.current.targetX = clientX;
    posRef.current.targetY = clientY;
    posRef.current.isHovering = true;

    if (onCursorUpdate) {
      onCursorUpdate({ x: clientX, y: clientY, isHovering: true });
    }
  }, [onCursorUpdate]);

  const handlePointerLeave = useCallback(() => {
    posRef.current.isHovering = false;
    if (onCursorUpdate) {
      onCursorUpdate({ isHovering: false });
    }
  }, [onCursorUpdate]);

  // Global document mouseleave listener to ensure it turns off if mouse leaves window
  useEffect(() => {
    const handleDocMouseLeave = () => {
      posRef.current.isHovering = false;
      if (onCursorUpdate) {
        onCursorUpdate({ isHovering: false });
      }
    };

    document.addEventListener('mouseleave', handleDocMouseLeave);
    window.addEventListener('blur', handleDocMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleDocMouseLeave);
      window.removeEventListener('blur', handleDocMouseLeave);
    };
  }, [onCursorUpdate]);

  // Main Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      time += 0.024;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth hover bloom & collapse physics
      const targetHover = posRef.current.isHovering ? 1 : 0;
      posRef.current.hoverProgress += (targetHover - posRef.current.hoverProgress) * 0.11;

      // If not hovering and hoverProgress is negligible, skip rendering
      if (!imgRef.current || !imageLoaded || posRef.current.hoverProgress < 0.002) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      const img = imgRef.current;
      const isMobile = width < 768;
      const focal = isMobile ? focalPoint.mobile : focalPoint.desktop;

      // Calculate object-cover dimensions to align 100% with the base B&W HTML image
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = width / height;
      let renderWidth, renderHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        renderWidth = width;
        renderHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - renderHeight) * focal.y;
      } else {
        renderHeight = height;
        renderWidth = height * imgRatio;
        offsetX = (width - renderWidth) * focal.x;
        offsetY = 0;
      }

      // Physics Lerp (Silky smooth lagging follow)
      const prevX = posRef.current.currentX;
      const prevY = posRef.current.currentY;
      
      const lerpSpeed = 0.11;
      posRef.current.currentX += (posRef.current.targetX - posRef.current.currentX) * lerpSpeed;
      posRef.current.currentY += (posRef.current.targetY - posRef.current.currentY) * lerpSpeed;

      const vx = posRef.current.currentX - prevX;
      const vy = posRef.current.currentY - prevY;
      const speed = Math.hypot(vx, vy);
      const moveAngle = Math.atan2(vy, vx);

      const curX = posRef.current.currentX;
      const curY = posRef.current.currentY;

      // Dynamic scale applied during hover in/out
      const hoverScale = posRef.current.hoverProgress;
      const dynamicRadius = (isMobile ? revealRadius * 0.8 : revealRadius) * hoverScale;

      ctx.save();
      ctx.globalAlpha = Math.min(hoverScale * 1.1, 1);

      // Create Uneven Organic Fluid Path
      const numPoints = 22;
      const points = [];

      // Generate harmonic uneven vertices
      for (let i = 0; i < numPoints; i++) {
        const theta = (i / numPoints) * Math.PI * 2;
        
        // Organic fluid wave harmonics (creates an uneven, living liquid contour)
        const harmonic1 = Math.sin(3 * theta + time * 1.6) * 0.19;
        const harmonic2 = Math.cos(5 * theta - time * 1.2) * 0.14;
        const harmonic3 = Math.sin(2 * theta + time * 2.3) * 0.10;
        const harmonic4 = Math.cos(7 * theta + time * 0.8) * 0.06;
        
        // Velocity stretch (elongates in direction of cursor travel)
        const velocityStretch = Math.min(speed * 0.35, 28) * Math.cos(theta - moveAngle) * hoverScale;

        const r = dynamicRadius * (1 + harmonic1 + harmonic2 + harmonic3 + harmonic4) + velocityStretch;
        const px = curX + Math.cos(theta) * r;
        const py = curY + Math.sin(theta) * r;

        points.push({ x: px, y: py });
      }

      // Draw smooth closed spline through points
      ctx.beginPath();
      const firstMidX = (points[0].x + points[numPoints - 1].x) / 2;
      const firstMidY = (points[0].y + points[numPoints - 1].y) / 2;
      ctx.moveTo(firstMidX, firstMidY);

      for (let i = 0; i < numPoints; i++) {
        const pCurrent = points[i];
        const pNext = points[(i + 1) % numPoints];
        const midX = (pCurrent.x + pNext.x) / 2;
        const midY = (pCurrent.y + pNext.y) / 2;
        ctx.quadraticCurveTo(pCurrent.x, pCurrent.y, midX, midY);
      }
      ctx.closePath();

      // Trailing satellite micro-droplet for high fashion fluid feel
      const dropDist = dynamicRadius * 1.15 + speed * 0.4;
      const dropAngle = moveAngle + Math.PI + Math.sin(time * 2) * 0.5;
      const dropX = curX + Math.cos(dropAngle) * dropDist;
      const dropY = curY + Math.sin(dropAngle) * dropDist;
      const dropR = dynamicRadius * 0.2 * (1 + Math.sin(time * 3) * 0.2);

      // Clip to the organic uneven shape
      ctx.clip();

      // Draw the full vibrant color image inside the mask
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

      // Soft inner feathered falloff
      const radialGrad = ctx.createRadialGradient(
        curX, curY, dynamicRadius * 0.3,
        curX, curY, dynamicRadius * 1.25
      );
      radialGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      radialGrad.addColorStop(0.75, 'rgba(0, 0, 0, 0)');
      radialGrad.addColorStop(1, 'rgba(9, 9, 11, 0.45)');
      ctx.fillStyle = radialGrad;
      ctx.fill();

      ctx.restore();

      // Draw Luxury Contour Glow around the uneven fluid boundary
      ctx.save();
      ctx.globalAlpha = Math.min(hoverScale * 1.1, 1);
      ctx.beginPath();
      ctx.moveTo(firstMidX, firstMidY);
      for (let i = 0; i < numPoints; i++) {
        const pCurrent = points[i];
        const pNext = points[(i + 1) % numPoints];
        const midX = (pCurrent.x + pNext.x) / 2;
        const midY = (pCurrent.y + pNext.y) / 2;
        ctx.quadraticCurveTo(pCurrent.x, pCurrent.y, midX, midY);
      }
      ctx.closePath();
      
      ctx.strokeStyle = 'rgba(216, 195, 189, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(201, 173, 167, 0.55)';
      ctx.shadowBlur = 14;
      ctx.stroke();

      // Subtle chromatic rim accent
      ctx.strokeStyle = 'rgba(244, 239, 234, 0.25)';
      ctx.lineWidth = 0.8;
      ctx.shadowBlur = 4;
      ctx.stroke();

      // Draw satellite droplet with color & glow when moving
      if (speed > 1.8 && hoverScale > 0.5) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(dropX, dropY, Math.max(dropR, 3), 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        ctx.restore();

        ctx.beginPath();
        ctx.arc(dropX, dropY, Math.max(dropR, 3), 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(216, 195, 189, 0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [imageLoaded, revealRadius, focalPoint]);

  return (
    <div 
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto cursor-none touch-none"
        style={{ mixBlendMode: 'normal' }}
      />
    </div>
  );
}
