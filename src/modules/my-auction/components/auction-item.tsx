import Image from "next/image";
import landingImg from "@/assets/landing.jpg";

interface Props {
  imageUrl: string;
  name: string;
  category: string;
}
export default function AuctionItem({ imageUrl, name, category }: Props) {
  return (
    <div className="flex items-center gap-2 w-fit ml-20">
      <div className="size-32 relative overflow-clip">
        <Image
          src={landingImg}
          fill
          className="object-cover object-center"
          alt="test"
        />
      </div>
      <div>
        <h1 className="text-xl font-bold uppercase font-mono">{name}</h1>
        <span className="block tracking-widest text-left text-secondary40 text-xs">
          {category}
        </span>
      </div>
    </div>
  );
}
