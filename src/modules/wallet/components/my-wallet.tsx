"use client";

import TransactionHistory from "./transaction-history";
import PageLayout from "@/common/components/layouts/page-layout";
import { EscrowInfo } from "./escrow-info";
import { FormTopUp } from "./form-top-up";
import { StripeForm } from "../schema";

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

interface Props {
  activeBalance: string;
  heldBalance: string;
  onTopUp: (amount: StripeForm) => void;
  isLoadingTopUp: boolean;
}

export default function MyWallet({
  activeBalance,
  heldBalance,
  onTopUp,
  isLoadingTopUp,
}: Props) {
  return (
    <PageLayout
      title="WALLET_LEDGER"
      description="Manage your fiat balance, track escrowed funds tied to active bids, and
        initialize new deposits via Stripe."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mt-5">
        {/* LEFT SECTION */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <EscrowInfo activeBalance={activeBalance} heldBalance={heldBalance} />

          {/* 4. Form Top Up to Stripe */}
          <FormTopUp onSubmit={onTopUp} isLoading={isLoadingTopUp} />
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
    </PageLayout>
  );
}
