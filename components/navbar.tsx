"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CheckSquare, Info, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";
import WalletAddress from "./WalletAddress";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAuthAction = async () => {
    if (isConnected) {
      await disconnect();
      router.push('/');
    } else {
      router.push('/sign-in');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <CheckSquare className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-foreground">ToDApp</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/about">
            <Button variant="ghost" size="sm">
              <Info className="mr-2 h-4 w-4" />
              About
            </Button>
          </Link>
          {isConnected && (
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
          )}
          <ThemeToggle />
          <div className="flex flex-col items-end">
            <Button
              onClick={handleAuthAction}
              className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Wallet className="mr-2 h-4 w-4" />
              {isConnected ? "Disconnect" : "Sign In"}
            </Button>
            {isConnected && <WalletAddress />}
          </div>
        </div>
      </div>
    </nav>
  );
}