interface Props {
  title: string;
  value: string;
}
export default function AuctionInfo({ title, value }: Props) {
  return (
    <div className="py-5 border-y flex justify-between">
      <span className="text-secondary40">{title}</span>
      <span className="font-mono">{value}</span>
    </div>
  );
}
