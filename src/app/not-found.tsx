import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Blessed Hair Studio",
  description: "Return to Blessed Hair Studio's locations, services and booking options.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404 · Wrong turn</p>
      <h1>This chair is empty.</h1>
      <p>The page you requested could not be found.</p>
      <Link className="button button--red" href="/">
        Return to the studio
      </Link>
    </main>
  );
}
