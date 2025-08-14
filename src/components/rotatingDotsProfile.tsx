"use client"
import React from 'react';
import Image from "next/image";

const RotatingDotsProfile = () => {
    // Gera as posições das bolinhas em múltiplas camadas (igual à Apple)
    const generateDots = () => {
        const dots = [];
        const layers = 4; // 4 camadas de bolinhas
        const dotsPerLayer = 15; // 15 bolinhas por camada
        const baseRadius = 100;

        for (let layer = 0; layer < layers; layer++) {
            const radius = baseRadius + (layer * 12); // Cada camada 12px mais externa
            // Tamanhos maiores: camada externa (layer 3) maior, interna (layer 0) menor
            const dotSize = 8 + layer * 3; // De 8px (interna) a 17px (externa)

            for (let i = 0; i < dotsPerLayer; i++) {
                const angle = (i / dotsPerLayer) * 2 * Math.PI + (layer * 0.3); // Offset entre camadas
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                // Gradiente Apple baseado na posição angular absoluta (fixo no espaço)
                const absoluteAngle = Math.atan2(y, x) + Math.PI; // Normalizar para 0-2π
                const position = absoluteAngle / (2 * Math.PI);

                let hue;
                if (position < 0.15) {
                    hue = position * 400;
                } else if (position < 0.35) {
                    hue = 60 + ((position - 0.15) * 300);
                } else if (position < 0.5) {
                    hue = 120 + ((position - 0.35) * 400);
                } else if (position < 0.65) {
                    hue = 180 + ((position - 0.5) * 400);
                } else if (position < 0.85) {
                    hue = 240 + ((position - 0.65) * 200);
                } else {
                    hue = 280 + ((position - 0.85) * 267);
                }

                const color = `hsl(${hue}, 85%, 65%)`;

                dots.push(
                    <div
                        key={`${layer}-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: `${dotSize}px`,
                            height: `${dotSize}px`,
                            backgroundColor: color,
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)',
                            opacity: 0.9
                        }}
                    />
                );
            }
        }
        return dots;
    };

    return (
        <div className="min-h-screen  flex items-start justify-center pt-20">
            <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Container das bolinhas rotativas */}
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '8s'}}>
                    {generateDots()}
                </div>

                {/* Foto do perfil no centro */}
                <div
                    className="relative z-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                        src="/mypic.jpg"
                        alt="Joao Lucas"
                        width={400}
                        height={400}
                        quality={100}
                        priority={true}
                        className="w-full h-full object-cover"
                        style={{
                            imageRendering: 'crisp-edges'
                        }}
                    />
                </div>

            </div>
            <div className="top-80 text-center text-white">
                <h1 className="text-2xl font-light mb-2">João Lucas</h1>
                <p className="text-gray-400">Developer</p>
            </div>
        </div>
    );
};

export default RotatingDotsProfile;