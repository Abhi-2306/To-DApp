"use client";

import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full border-t border-border/40 bg-background/95 py-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ToDApp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}