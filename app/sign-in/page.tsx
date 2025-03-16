"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Shield, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useConnect, useAccount } from "wagmi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const [showWalletDialog, setShowWalletDialog] = useState(false);
  const router = useRouter();

  const handleConnect = () => {
    setShowWalletDialog(true);
  };

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard');
    }
  }, [isConnected, router]);

  // Don't render the sign-in page if already connected
  if (isConnected) {
    return null;
  }

  return (
    <>
      <div className="flex min-h-[calc(100vh-4rem)] items-center bg-gradient-to-b from-background via-background/90 to-background/80 p-4">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome to the Future of Task Management
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Experience decentralized task management powered by blockchain technology.
              Your tasks, your data, your control.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Shield className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure by Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Protected by blockchain technology and smart contracts
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Lock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Web3 Authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect securely with your Web3 wallet
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Wallet className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Decentralized Storage</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data remains yours, stored on the blockchain
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 mx-auto w-full max-w-md lg:order-2"
          >
            <Card className="border-2 border-blue-500/20 bg-background/50 backdrop-blur dark:border-blue-400/20">
              <CardContent className="pt-6">
                <h2 className="mb-6 text-center text-2xl font-bold text-blue-500 dark:text-blue-400">
                  Connect Your Wallet
                </h2>
                <Button
                  onClick={handleConnect}
                  className="w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:text-slate-900 dark:hover:bg-blue-500"
                  size="lg"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Dialog open={showWalletDialog} onOpenChange={setShowWalletDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            {connectors.map((connector) => (
              <Button
                key={connector.id}
                onClick={() => {
                  connect({connector});
                  setShowWalletDialog(false);
                }}
                className="w-full justify-start gap-2"
                variant="outline"
              >
                <Wallet className="h-5 w-5" />
                {connector.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}