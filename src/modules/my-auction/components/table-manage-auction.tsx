import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AuctionItem from "./auction-item";
import HighestBid from "./highest-bid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";

export default function TableManageAuction() {
  return (
    <Table className="mt-10">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center tracking-widest text-xs font-bold text-secondary40">
            NO
          </TableHead>
          <TableHead className="text-center tracking-widest text-xs font-bold text-secondary40">
            ITEM NAME & DETAIL
          </TableHead>
          <TableHead className="text-center tracking-widest text-xs font-bold text-secondary40">
            CURRENT HIGHEST BID
          </TableHead>
          <TableHead className="text-center tracking-widest text-xs font-bold text-secondary40">
            STATUS
          </TableHead>
          <TableHead className="text-center tracking-widest text-xs font-bold text-secondary40">
            MANAGE
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center font-mono text-xl">001</TableCell>
          <TableCell className="py-5 flex items-center justify-center">
            <AuctionItem />
          </TableCell>
          <TableCell className="text-center">
            <HighestBid amount={420000} type="ACTIVE" bids={20} />
          </TableCell>
          <TableCell className="text-center">
            <Badge variant="outline">ACTIVE</Badge>
          </TableCell>
          <TableCell className="text-center">
            <Button size="icon" variant="ghost">
              <EllipsisVertical />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
