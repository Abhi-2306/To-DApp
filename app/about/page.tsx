"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">About ToDApp</h1>
        
        <div className="space-y-8">
          <Card className="border-blue-500/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">What is ToDApp?</h2>
              <p className="text-muted-foreground">
                ToDApp is a decentralized task management application built on the Ethereum blockchain.
                It combines the simplicity of traditional todo apps with the security and transparency
                of blockchain technology.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Technical Stack</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Smart Contracts: Solidity on Ethereum</li>
                <li>Frontend: Next.js, TypeScript, Tailwind CSS</li>
                <li>Web3 Integration: ethers.js</li>
                <li>UI Components: shadcn/ui</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-card/50">
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">Why Blockchain?</h2>
              <p className="text-muted-foreground">
                By leveraging blockchain technology, ToDApp provides:
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>Immutable task records</li>
                <li>Decentralized data storage</li>
                <li>Complete data ownership</li>
                <li>Transparent task verification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}