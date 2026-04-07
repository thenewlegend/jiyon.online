<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let particles: Particle[] = [];
  let animationFrameId: number;

  // Track mouse coordinates (initialized off-screen)
  let mouse = { x: -1000, y: -1000 };

  class Particle {
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    opacity: number;
    baseX: number;

    constructor(width: number, height: number) {
      this.x = Math.random() * width;
      this.baseX = this.x;
      this.y = height + Math.random() * 200; // Start below the screen
      this.size = Math.random() * 1.5 + 0.5; // Microscopic bubbles
      this.speedY = Math.random() * 1.2 + 0.3; // Gentle rise
      this.speedX = (Math.random() - 0.5) * 0.2; // Slight wobble
      this.opacity = Math.random() * 0.4 + 0.1; // Subtle
    }

    update(width: number, height: number) {
      this.y -= this.speedY;
      
      // Wobble effect
      this.x += Math.sin(this.y * 0.05) * 0.2 + this.speedX;

      // Mouse repulsion
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 120) {
        const force = (120 - distance) / 120;
        this.x -= (dx / distance) * force * 2;
      } else {
         // Slowly return to base horizontal drift
         this.x += (this.baseX - this.x) * 0.01;
      }

      // Reset when off screen top
      if (this.y < -10) {
        this.y = height + 10;
        this.x = Math.random() * width;
        this.baseX = this.x;
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      // Clean cyan/white glow for hydrogen aesthetic
      ctx.fillStyle = `rgba(180, 240, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = -1000;
      mouse.y = -1000;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();

    // Scale particles based on screen width for performance
    const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150); 
    
    for (let i = 0; i < particleCount; i++) {
        const p = new Particle(canvas.width, canvas.height);
        // Distribute instantly so screen isn't empty on load
        p.y = Math.random() * canvas.height; 
        particles.push(p);
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx!);
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas 
  bind:this={canvas} 
  class="absolute inset-0 z-0 pointer-events-none"
  style="mix-blend-mode: screen;"
></canvas>
