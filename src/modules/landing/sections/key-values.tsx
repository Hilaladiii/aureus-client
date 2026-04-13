import CardKeyValues from "../components/card-key-values";

const keyValues = [
  {
    title: "Zero Latency Bidding",
    description:
      "ENGINEERED FOR MILLISECOND RESOLUTION IN COMPETITIVE HIGH-VALUE LOT EXCHANGES.",
  },
  {
    title: "Secure Escrow",
    description:
      "AUTOMATED FUND ISOLATION ENSURING TRANSPARENCY FOR BOTH CONSIGNOR AND COLLECTOR.",
  },

  {
    title: "Transparent Ledgers",
    description:
      "PUBLIC CRYPTOGRAPHIC VERIFICATION OF EVERY TRANSACTION HISTORY WITHIN THE ARCHIVE.",
  },
];
export default function KeyValues() {
  return (
    <div className="w-full">
      {keyValues.map((value, index) => (
        <CardKeyValues
          index={index + 1}
          key={value.title}
          title={value.title}
          description={value.description}
        />
      ))}
    </div>
  );
}
