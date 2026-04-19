import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import AuctionItem from "./auction-item";
import HighestBid from "./highest-bid";
import { Badge } from "@/common/components/ui/badge";
import { Button } from "@/common/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import { TAuction } from "@/services/auction/type";

interface Props {
  data: TAuction[];
}
export default function TableManageAuction({ data }: Props) {
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
        {Array.isArray(data) &&
          data.map((auction, index) => (
            <TableRow key={auction.id}>
              <TableCell className="text-center font-mono text-xl">
                00{index + 1}
              </TableCell>
              <TableCell className="py-5 ">
                <AuctionItem
                  category={auction.category.name}
                  name={auction.name}
                  imageUrl={auction.images[0].imageUrl}
                />
              </TableCell>
              <TableCell className="text-center">
                <HighestBid
                  amount={auction.currentPrice}
                  type="ACTIVE"
                  bids={20}
                />
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
          ))}
      </TableBody>
    </Table>
  );
}
