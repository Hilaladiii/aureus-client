import { TCategory } from "../category/type";

export type TAuctionImage = {
  id: string;
  key: string;
  createdAt: Date;
};

export type TBidder = {
  name: string;
  bidAmount: string;
};

export type TAuctionBidRequest = {
  amount: number;
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
