import { cn } from "@/lib/utils";

export function fieldClassName(err: boolean) {
  return cn(
    "w-full rounded-xl border bg-background/80 px-4 py-3 text-sm font-semibold text-foreground outline-none transition",
    "focus:border-foreground/40 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
    err ? "border-red-500/60 focus-visible:ring-red-500/40" : "border-border",
  );
}
