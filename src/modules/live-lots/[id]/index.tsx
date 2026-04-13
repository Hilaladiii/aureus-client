"use client";

import { useParams } from "next/navigation";
import TableAuctionLog from "./components/table-auction-log";
import FormIncrementBid from "./components/form-increment-bid";
import Galery from "./components/galery";
import GeneralInfo from "./components/general-info";
import AuctionInfo from "./components/auction-info";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex">
      <Galery />
      <div className="w-1/2 mt-30 px-8">
        <GeneralInfo
          category="Automotive // Supercar"
          title="Mclaren 720s"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor
        eius itaque porro soluta vel, adipisci rerum cupiditate reiciendis iste,
        ullam consequuntur, pariatur tenetur quisquam modi incidunt debitis
        cumque possimus."
        >
          <div className="mt-10"></div>
          <AuctionInfo title="START PRICE" value="$400,000.00" />
          <AuctionInfo title="START TIME" value="OCT 12, 2026. 01:00 AM" />
          <AuctionInfo title="END TIME" value="OCT 15, 2026. 01:00 AM" />
        </GeneralInfo>
        <FormIncrementBid />
        <TableAuctionLog />
      </div>
    </div>
  );
}
