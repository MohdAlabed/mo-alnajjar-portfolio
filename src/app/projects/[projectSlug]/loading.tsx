export default function ProjectLoading() {
  return (
    <main className="min-h-screen text-white bg-black animate-pulse">
      <div className="container max-w-7xl mx-auto px-6 pb-6 my-24 lg:px-10 lg:pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column Skeleton */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Image Gallery Placeholder */}
          <div className="w-full aspect-[4/3] bg-zinc-900 rounded-xl" />

          {/* Meta Data Block Placeholder */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <div className="h-3 w-16 bg-zinc-800 rounded" />
              <div className="h-4 w-32 bg-zinc-800 rounded" />
            </div>
            <div className="flex justify-between items-center pb-4">
              <div className="h-3 w-12 bg-zinc-800 rounded" />
              <div className="h-4 w-28 bg-zinc-800 rounded" />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="h-7 w-14 bg-zinc-800 rounded-lg" />
              <div className="h-7 w-20 bg-zinc-800 rounded-lg" />
              <div className="h-7 w-16 bg-zinc-800 rounded-lg" />
            </div>
          </div>
        </aside>

        {/* Right Column Skeleton */}
        <article className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            {/* Title Placeholder */}
            <div className="h-10 w-3/4 bg-zinc-900 rounded-md" />
            <div className="h-1 w-24 bg-zinc-800 rounded-full" />
          </div>
          
          {/* Description Lines Placeholder */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-zinc-900 rounded" />
            <div className="h-4 w-full bg-zinc-900 rounded" />
            <div className="h-4 w-5/6 bg-zinc-900 rounded" />
            <div className="h-4 w-2/3 bg-zinc-900 rounded" />
          </div>
        </article>

      </div>
    </main>
  );
}