import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-6">
      <div className="flex flex-col items-center text-center max-w-md gap-6 p-10">
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-zinc-100">404</h1>
          <h2 className="text-xl font-semibold text-zinc-200">
            Project Not Found
          </h2>
        </div>

        <p className="text-sm text-zinc-400">
          {`We couldn't find the project you were looking for. The link might be broken, or the project may have been moved.`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
          <Link 
            href="/#projects" 
            className="flex-1 text-center text-sm font-semibold px-6 py-3.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            Recent Projects
          </Link>
          <Link 
            href="/" 
            className="flex-1 text-center text-sm font-semibold px-6 py-3.5 rounded-xl border border-zinc-800 text-zinc-300 hover:bg-zinc-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
        
      </div>
    </main>
  );
}