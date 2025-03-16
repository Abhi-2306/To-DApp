"use client";

import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
            <p className="text-muted-foreground">
              At ToDApp, we take your privacy seriously. This policy describes how we collect, use, and protect your information when you use our decentralized task management application.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Wallet addresses for authentication</li>
              <li>Task data stored on the blockchain</li>
              <li>Usage statistics and interaction data</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              Your information is primarily used to provide and improve the ToDApp service. All task data is stored on the blockchain, ensuring transparency and user control.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
            <p className="text-muted-foreground">
              We implement blockchain technology and smart contracts to ensure your data remains secure and under your control at all times.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our privacy policy, please contact us at privacy@todapp.com
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}