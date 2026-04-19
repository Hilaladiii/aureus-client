"use client";

import PageLayout from "@/common/components/layouts/page-layout";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import TableManageAuction from "./components/table-manage-auction";
import useSWR from "swr";
import { SWR_KEY } from "@/common/constants/swr-key";
import { getMyAuctions } from "@/services/auction";

export default function Page() {
  const { data } = useSWR(SWR_KEY.AUCTION.MY_AUCTIONS, getMyAuctions);
  const auctions = data?.data.items;
  return (
    <PageLayout
      title="MY AUCTION"
      description="lorem ipsum dolor sit amet"
      action={
        <Link href="/my-auctions/create">
          <Button variant="outline">CREATE NEW LISTING</Button>
        </Link>
      }
    >
      <TableManageAuction data={auctions || []} />
    </PageLayout>
  );
}
