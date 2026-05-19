import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black px-6">
      {/* Inline title is the standard workaround for metadata in not-found.tsx */}
      <title>404: Page Not Found</title>
      
      <div className="flex flex-col items-center text-center max-w-md gap-6 p-10">
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-zinc-100">404</h1>
          <h2 className="text-xl font-semibold text-zinc-200">
            Page Not Found
          </h2>
        </div>

        <p className="text-sm text-zinc-400">
          {`We couldn't find the page you were looking for. The link might be broken, or the page may have been removed.`}
        </p>

        <div className="flex w-full mt-4">
          <Link 
            href="/" 
            className="flex-1 text-center text-sm font-semibold px-6 py-3.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            Return Home
          </Link>
        </div>
        
      </div>
    </main>
  );
}