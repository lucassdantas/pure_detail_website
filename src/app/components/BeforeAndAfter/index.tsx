'use client'
import React, { useRef, useState, useEffect } from "react";

type BeforeAndAfterProps = {
  dirtyImg: string; // imagem do carro sujo
  cleanImg: string;  // imagem do carro limpo
};

export const BeforeAndAfter: React.FC<BeforeAndAfterProps> = ({
  dirtyImg,
  cleanImg,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // posição inicial da linha (em %)
  const [isDragging, setIsDragging] = useState(false);

  // Animação automática no hover
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isDragging) {
      interval = setInterval(() => {
        setPosition((prev) => {
          if (prev >= 70) return 30; // vai pro outro lado
          if (prev <= 30) return 70;
          return prev + 20; // movimento oscilante
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isDragging]);

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newPosition = ((clientX - bounds.left) / bounds.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setPosition(newPosition);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto h-[400px] overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseLeave={stopDrag}
      onMouseUp={stopDrag}
      onTouchEnd={stopDrag}
    >
      {/* imagem de fundo (carro limpo) */}
      <img
        src={cleanImg}
        alt="Carro limpo"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* imagem da frente (carro sujo) cortada */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={dirtyImg}
          alt="Carro sujo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* linha divisória */}
      <div
        className="absolute top-0 h-full w-[4px] bg-accent-yellow cursor-col-resize transition-all"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        {/* bolinha para indicar arrasto */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white border-2 border-accent-yellow rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg" />
      </div>
    </div>
  );
};
