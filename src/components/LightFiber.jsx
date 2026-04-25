import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LightFiber = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const lines = [];

    // ایجاد خطوط نوری تصادفی
    for (let i = 0; i < 60; i++) {
      lines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 150 + 50,
        speed: Math.random() * 1 + 0.5,
        angle: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + Math.cos(line.angle) * line.length, line.y + Math.sin(line.angle) * line.length);
        ctx.strokeStyle = "rgba(0, 204, 255, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        // بازگشت خطوط از لبه‌ها
        if (line.x > width || line.x < 0 || line.y > height || line.y < 0) {
          line.x = Math.random() * width;
          line.y = Math.random() * height;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    // تغییر سایز هنگام Resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="light-fiber" />;
};

export default LightFiber;