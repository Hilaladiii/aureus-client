import Image from "next/image";
import LandingImg from "@/assets/landing.jpg";
import { useState } from "react";
import { cn } from "@/lib/utils";

const galleryItems = [
  { id: 1, src: LandingImg, alt: "Primary Angle" },
  { id: 2, src: LandingImg, alt: "Interior Detail" },
  { id: 3, src: LandingImg, alt: "Engine Spec" },
  { id: 4, src: LandingImg, alt: "Rear Profile" },
];

export default function Galery() {
  const [activeImg, setActiveImg] = useState(galleryItems[0]);
  return (
    <div className="w-1/2">
      {/* PREVIEW */}
      <div className="w-full h-screen relative overflow-clip">
        <Image
          src={LandingImg}
          fill
          className="object-cover object-center"
          alt="test"
        />
      </div>
      {/* CHILD GALERY */}
      <div className="grid grid-cols-2">
        {galleryItems.map((item) => {
          const isActive = activeImg.id === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveImg(item)}
              className={cn(
                "relative w-full aspect-square overflow-hidden transition-all duration-300 opacity-50 grayscale hover:grayscale-0 hover:opacity-100",
                isActive && "opacity-100",
              )}
            >
              <Image
                src={item.src}
                fill
                alt={item.alt}
                className="object-cover object-center"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
