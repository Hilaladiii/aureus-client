import { TCategory } from "../category/type";

type TAuctionImage = {
  id: string;
  imageUrl: string;
  createdAt: Date;
};

export type TAuction = {
  id: string;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  startPrice: number;
  bidIncrement: number;
  currentPrice: number;
  category: TCategory;
  images: TAuctionImage[];
};
