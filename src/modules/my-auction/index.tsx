import PageLayout from "@/common/components/layouts/page-layout";
import { Button } from "@/common/components/ui/button";
import Link from "next/link";
import TableManageAuction from "./components/table-manage-auction";

export default function Page() {
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
      <TableManageAuction />
    </PageLayout>
  );
}
