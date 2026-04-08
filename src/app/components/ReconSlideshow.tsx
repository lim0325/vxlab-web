"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/recon-3d-1.png", alt: "BGA 3D Reconstruction" },
  { src: "/recon-3d-2.png", alt: "Engine Part CT" },
  { src: "/recon-3d-3.png", alt: "PCB 3D Reconstruction" },
  { src: "/recon-3d-4.png", alt: "GSV CT Scan" },
  { src: "/recon-3d-5.png", alt: "X-ray Volume" },
  { src: "/recon-3d-6.png", alt: "Bead 3D Model" },
];

export default function ReconSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-accent" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
