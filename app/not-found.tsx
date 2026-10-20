import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07080c] text-white px-6">
      <h2 className="font-display text-4xl font-bold">404</h2>
      <p className="mt-2 text-neutral-400">Page not found</p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-neutral-200 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
