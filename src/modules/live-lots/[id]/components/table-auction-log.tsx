import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import { formatCurrency } from "@/common/utils/formatter";
import { TBidder } from "@/services/auction/type";

interface Props {
  data: TBidder[];
}

export default function TableAuctionLog({ data }: Props) {
  return (
    <div>
      <h2 className="text-lg mt-8 mb-5 font-bold tracking-widest">
        AUCTION LEDGER LOG
      </h2>
      <Table>
        <TableHeader className="bg-secondary40/10">
          <TableRow>
            <TableHead className="text-center font-bold text-secondary40">
              BIDDER
            </TableHead>
            <TableHead className="text-center font-bold text-secondary40">
              AMOUNT BID
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length > 0 ? (
            data.map((bidder) => (
              <TableRow key={bidder.name + bidder.bidAmount}>
                <TableCell className="text-center font-mono">
                  {bidder.name}
                </TableCell>
                <TableCell className="text-center font-mono">
                  {formatCurrency(bidder.bidAmount)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={2}
                className="text-center text-secondary40 py-10"
              >
                NO BIDS YET
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
