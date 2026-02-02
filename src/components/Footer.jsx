import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-400">
            St. Antony&apos;s College Peruvanthanam
          </p>

          <h2 className="text-2xl font-extrabold tracking-widest text-white sm:text-3xl">
            Infesta: WebSprint Challenge
          </h2>

          <p className="max-w-xl text-sm text-slate-400">
            A frontend development challenge where creativity meets speed.
            Design. Build. Win.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Infesta · SAC Peruvanthanam
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-white transition-colors"
            >
              Rules
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
