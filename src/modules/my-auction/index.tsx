import PageLayout from "@/components/layouts/page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TableManageAuction from "./components/table-manage-auction";

export default function Page() {
  return (
    <PageLayout
      title="MY AUCTION"
      description="lorem ipsum dolor sit amet"
      action={
        <Link href="/my-auction/create">
          <Button variant="outline">CREATE NEW LISTING</Button>
        </Link>
      }
    >
      <TableManageAuction />
    </PageLayout>
  );
}
