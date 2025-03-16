"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Shield, Wallet, Code2, Lock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Decentralized Storage",
    description: "Your tasks are stored on the blockchain, ensuring complete data ownership and transparency.",
    icon: Shield,
  },
  {
    title: "Smart Contract Powered",
    description: "Built on Ethereum using Solidity smart contracts for secure and reliable task management.",
    icon: Wallet,
  },
  {
    title: "Task Verification",
    description: "Complete tasks are verified and stored on-chain, creating an immutable record of your productivity.",
    icon: CheckCircle,
  },
];

const techStack = [
  {
    title: "Solidity Smart Contracts",
    description: "Secure, audited smart contracts for reliable task management on the Ethereum blockchain.",
    icon: Code2,
  },
  {
    title: "Web3 Integration",
    description: "Seamless integration with MetaMask and other Web3 wallets for easy blockchain interaction.",
    icon: Lock,
  },
  {
    title: "Modern Frontend",
    description: "Built with Next.js and Tailwind CSS for a responsive and beautiful user experience.",
    icon: Shield,
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl"
            >
              Decentralize Your Tasks
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              Experience the future of task management with blockchain technology.
              Secure, transparent, and completely decentralized.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center space-x-4"
            >
              <Link href="/sign-in">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden border-blue-500/20 bg-card/50 transition-colors hover:border-blue-500/30">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-blue-500" />
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold"
          >
            Powered by Modern Technology
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="relative overflow-hidden border-blue-500/20 bg-card/50 transition-colors hover:border-blue-500/30">
                  <CardContent className="p-6">
                    <tech.icon className="h-12 w-12 text-blue-500" />
                    <h3 className="mt-4 text-xl font-semibold">{tech.title}</h3>
                    <p className="mt-2 text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}