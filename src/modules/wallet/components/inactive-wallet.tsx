import { Button } from "@/components/ui/button";

export default function InactiveWallet() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="max-w-xl w-full flex flex-col items-start border-l-1 border-foreground/20 pl-8 md:pl-12 py-4">
        <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tight text-foreground leading-[1.05] mb-6">
          WALLET <br /> INACTIVE.
        </h1>

        <p className="text-secondary40 font-medium text-base leading-relaxed mb-10 max-w-md">
          To participate in live auctions using fiat currency, your bidding
          account must be initialized. Please authorize our payment gateway and
          accept the bidding terms of service.
        </p>

        <div className="flex flex-col gap-2 mb-10 w-full max-w-md">
          <div className="flex justify-between items-center py-3 border-b border-foreground/10">
            <span className="text-xs font-mono tracking-widest text-foreground/50 uppercase">
              Account Status
            </span>
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Restricted
            </span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-foreground/10">
            <span className="text-xs font-mono tracking-widest text-foreground/50 uppercase">
              Processor
            </span>
            <span className="text-sm font-semibold text-foreground">
              STRIPE
            </span>
          </div>
        </div>

        <Button
          size="lg"
          className="px-10 h-14 font-mono text-sm tracking-widest font-bold"
        >
          ACTIVATE WALLET
        </Button>
      </div>
    </div>
  );
}
