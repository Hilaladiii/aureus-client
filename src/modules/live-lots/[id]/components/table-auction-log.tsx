import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";

export default function TableAuctionLog() {
  return (
    <div>
      <h2 className="text-lg mt-8 mb-5 font-bold tracking-widest">
        AUCTION LEDGER LOG
      </h2>
      <Table>
        <TableHeader className="bg-secondary40/10">
          <TableRow>
            <TableHead className="text-center font-bold text-secondary40">
              TIME
            </TableHead>
            <TableHead className="text-center font-bold text-secondary40">
              BIDDER
            </TableHead>
            <TableHead className="text-center font-bold text-secondary40">
              AMOUNT BID
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center font-mono">
              OCT 12 2026. 01:00 PM{" "}
            </TableCell>
            <TableCell className="text-center font-mono">R**P</TableCell>
            <TableCell className="text-center font-mono">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
