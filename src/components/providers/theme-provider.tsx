"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
      <NextThemesProvider
      attribute="class"
      themes={["light", "dark"]}
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  );
}
