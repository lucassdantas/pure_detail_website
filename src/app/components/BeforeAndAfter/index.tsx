"use client";

import React, { useEffect, useRef, useState } from "react";

type BeforeAndAfterProps = {
  dirtyImage: string;
  cleanImage: string;
};

export const BeforeAndAfter: React.FC<BeforeAndAfterProps> = ({ dirtyImage, cleanImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // posição da linha em %
  const [isDragging, setIsDragging] = useState(false);
  const [autoMove, setAutoMove] = useState(true);

  // Movimento automático (vai e volta enquanto não estiver arrastando)
  useEffect(() => {
    if (!autoMove) return;

    let direction = 1;
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 90) direction = -1;
        if (prev <= 10) direction = 1;
        return prev + direction * 0.5; // velocidade
      });
    }, 30);

    return () => clearInterval(interval);
  }, [autoMove]);

  // Função utilitária para calcular posição baseada no clique
  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return position;
    const rect = containerRef.current.getBoundingClientRect();
    const newPos = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(100, Math.max(0, newPos));
  };

  // Arraste com mouse
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition(calculatePosition(e.clientX));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setPosition(calculatePosition(e.clientX)); // já move no clique
    setIsDragging(true);
    setAutoMove(false); // pausa automático
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoMove(true); // volta a se mexer sozinho
  };

  // Eventos globais de arraste
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg select-none"
    >
      {/* Imagem limpa (fundo) */}
      <img
        src={cleanImage}
        alt="Depois"
        className="w-full h-auto block pointer-events-none"
      />

      {/* Imagem suja (clippada) */}
      <img
        src={dirtyImage}
        alt="Antes"
        className="absolute top-0 left-0 w-full h-auto block pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      {/* Linha divisória (clicável na área toda) */}
      <div
        className="absolute top-0 h-full w-6 -ml-3 cursor-col-resize flex items-center justify-center"
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
      >
        {/* linha */}
        <div className="h-full w-1 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]"></div>

        {/* bolinha de arraste */}
        <div className="absolute w-5 h-5 bg-white rounded-full shadow-md border border-gray-300"></div>
      </div>
    </div>
  );
};
