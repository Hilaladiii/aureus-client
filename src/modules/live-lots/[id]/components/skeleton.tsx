export default function Skeleton() {
  return (
    <div className="flex">
      {/* Skeleton Gallery */}
      <div className="w-1/2">
        <div className="w-full h-screen bg-secondary40/20 animate-pulse" />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="w-full aspect-square bg-secondary40/20 animate-pulse" />
          <div className="w-full aspect-square bg-secondary40/20 animate-pulse" />
        </div>
      </div>
      {/* Skeleton Info */}
      <div className="w-1/2 mt-30 px-8 space-y-6">
        <div className="h-4 w-20 bg-secondary40/20 animate-pulse mb-2" />
        <div className="h-12 w-64 bg-secondary40/20 animate-pulse mb-5" />
        <div className="h-24 w-full bg-secondary40/20 animate-pulse mb-10" />

        <div className="space-y-4 pt-10 border-t">
          <div className="h-12 w-full bg-secondary40/20 animate-pulse" />
          <div className="h-12 w-full bg-secondary40/20 animate-pulse" />
          <div className="h-12 w-full bg-secondary40/20 animate-pulse" />
        </div>

        <div className="mt-10 pt-10">
          <div className="h-4 w-32 bg-secondary40/20 animate-pulse mb-4" />
          <div className="h-16 w-48 bg-secondary40/20 animate-pulse" />

          <div className="mt-10">
            <div className="h-4 w-32 bg-secondary40/20 animate-pulse mb-2" />
            <div className="h-12 w-full bg-secondary40/20 animate-pulse" />
            <div className="h-14 w-full bg-secondary40/20 animate-pulse mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
