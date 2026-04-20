import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/common/lib/utils";
import { getImageObject } from "@/common/utils/image";
import { TAuctionImage } from "@/services/auction/type";

interface Props {
  data: TAuctionImage[];
}

export default function Galery({ data }: Props) {
  const [activeImg, setActiveImg] = useState<TAuctionImage | undefined>(
    data?.[0],
  );

  useEffect(() => {
    if (data?.length > 0 && !activeImg) {
      setActiveImg(data[0]);
    }
  }, [data, activeImg]);

  return (
    <div className="w-1/2">
      {/* PREVIEW */}
      <div className="w-full h-screen relative overflow-clip">
        <Image
          unoptimized
          src={getImageObject(activeImg?.key || "")}
          fill
          className="object-cover object-center"
          alt={activeImg?.key || "active-image"}
        />
      </div>
      {/* CHILD GALERY */}
      <div className="grid grid-cols-2">
        {Array.isArray(data) &&
          data.map((item) => {
            const isActive = activeImg?.id === item.id;

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
                  src={getImageObject(item.key)}
                  fill
                  unoptimized
                  alt={item.key + item.id}
                  className="object-cover object-center"
                />
              </button>
            );
          })}
      </div>
    </div>
  );
}
