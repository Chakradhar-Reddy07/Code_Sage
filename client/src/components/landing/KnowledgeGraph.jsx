import { useEffect, useRef } from "react";
import { graphNodes } from "../../data/knowledgeGraph";

function KnowledgeGraph() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationId;

    const mouse = {
      x: null,
      y: null,
    };

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();

    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const colors = [
      "#8B5CF6",
      "#6366F1",
      "#60A5FA",
      "#FFFFFF",
    ];

    const nodes = graphNodes.map((node, index) => ({
      ...node,
      baseX: node.x,
      baseY: node.y,
      radius:
        index % 12 === 0
          ? 5
          : index % 5 === 0
          ? 3.5
          : 2.5,

      color: colors[index % colors.length],

      angle: Math.random() * Math.PI * 2,

      speed: 0.003 + Math.random() * 0.002,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move Nodes
      nodes.forEach((node) => {
        const t = Date.now() * 0.001;

node.x =
  node.baseX +
  Math.sin(t + node.baseX * 0.01) * 4;

node.y =
  node.baseY +
  Math.cos(t + node.baseY * 0.01) * 4;

        // Mouse Repulsion
        if (mouse.x !== null) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            node.x -= dx * 0.02;
            node.y -= dy * 0.02;
          }
        }
      });

      // Draw Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 170) {
            ctx.beginPath();

            ctx.moveTo(a.x, a.y);

            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(139,92,246,${
              Math.max(
0.08,
0.45 - distance / 380
)
            })`;

            ctx.lineWidth =
distance < 80
? 1.8
: 1;

            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      nodes.forEach((node) => {
        ctx.beginPath();

        ctx.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = node.color;

        ctx.shadowColor = node.color;

        ctx.shadowBlur =
node.radius > 4
? 35
: 18;

        ctx.fill();
        if(node.radius > 4){

ctx.beginPath();

ctx.arc(
node.x,
node.y,
node.radius+5,
0,
Math.PI*2
);

ctx.strokeStyle="rgba(255,255,255,.15)";

ctx.lineWidth=1.5;

ctx.stroke();

}
      });

      animationId =
        requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default KnowledgeGraph;