import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TransactionHistory from "./transaction-history";

const transactions = [
  {
    time: "06:20 PM",
    type: "Deposit via Stripe",
    amount: "+$50,000.00",
    date: "2026-04-12",
    status: "Settled",
  },
  {
    time: "06:20 PM",
    type: "Escrow (Mclaren 720s)",
    amount: "-$8,200.00",
    date: "2026-04-13",
    status: "Active Bid",
  },
  {
    time: "06:20 PM",
    type: "Escrow Released",
    amount: "+$4,500.00",
    date: "2026-04-10",
    status: "Outbid",
  },
  {
    time: "06:20 PM",
    type: "Deposit via Stripe",
    amount: "+$10,000.00",
    date: "2026-04-05",
    status: "Settled",
  },
];

export default function MyWallet() {
  return (
    <div className="w-full min-h-screen">
      {/* 1. Page Title & Description */}
      <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-foreground">
        WALLET_LEDGER
      </h1>
      <p className="text-secondary40 text-sm max-w-lg tracking-tight mt-1">
        Manage your fiat balance, track escrowed funds tied to active bids, and
        initialize new deposits via Stripe.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-5">
        {/* LEFT SECTION */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div className="flex flex-col border border-foreground/10">
            {/* Active Balance */}
            <div className="p-6 md:p-8 bg-foreground/5">
              <span className="block text-xs font-mono tracking-widest text-foreground/60 uppercase mb-2">
                Available Liquidity
              </span>
              <span className="block text-4xl md:text-5xl font-mono font-bold text-foreground tracking-tight">
                $41,800.00
              </span>
            </div>
            {/* Escrow Balance */}
            <div className="p-6 md:p-8 border-t border-foreground/10 flex justify-between items-end">
              <div>
                <span className="block text-xs font-mono tracking-widest text-foreground/60 uppercase mb-1">
                  Held in Escrow
                </span>
                <span className="block text-3xl font-mono font-semibold text-foreground">
                  $8,200.00
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-amber-600 uppercase font-bold">
                Locked
              </span>
            </div>
          </div>

          {/* 4. Form Top Up to Stripe */}
          <div className="flex flex-col">
            <h3 className="text-sm font-mono font-bold tracking-widest uppercase border-b border-foreground/10 pb-4 mb-6">
              Initialize Deposit
            </h3>

            <form className="flex flex-col gap-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 font-mono font-medium">
                  USD
                </span>
                <Input
                  type="number"
                  placeholder="0.00"
                  className="w-full h-14 pl-14 pr-4 bg-transparent border border-foreground/20 focus:border-foreground focus:outline-none focus:ring-0 rounded-none font-mono text-lg transition-colors placeholder:text-foreground/20"
                />
              </div>
              <Button
                size="lg"
                className="w-full h-14 rounded-none font-mono text-sm tracking-widest uppercase font-bold"
              >
                Proceed to Stripe
              </Button>
            </form>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-7 flex flex-col">
          <h3 className="text-sm font-mono font-bold tracking-widest uppercase border-b border-foreground/10 pb-4 mb-6">
            Recent Activity
          </h3>
          <div className="flex flex-col">
            {transactions.map((tx) => (
              <TransactionHistory key={tx.type + tx.date} {...tx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
