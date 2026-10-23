"use client"

import { ProgressProvider } from "@bprogress/next/app"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"

// next-themes injects a <script> to prevent theme FOUC, which triggers a
// harmless React 19 console warning. Suppress it in dev only.
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const orig = console.error
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag")
    ) {
      return
    }
    orig.apply(console, args)
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
      >
        <ProgressProvider
          color="var(--foreground)"
          height="2px"
          delay={500}
          options={{ showSpinner: false }}
        >
          <TooltipProvider>{children}</TooltipProvider>

          <KeyboardShortcuts />
        </ProgressProvider>

        <Toaster />
      </ThemeProvider>
    </JotaiProvider>
  )
}
