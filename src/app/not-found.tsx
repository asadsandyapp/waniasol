import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-0.5 py-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted">
        404
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <Button href="/" variant="primary" className="mt-4">
        Back to home
      </Button>
      <Link
        href="/contact"
        prefetch={false}
        className="mt-4 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
      >
        Contact support
      </Link>
    </div>
  );
}
