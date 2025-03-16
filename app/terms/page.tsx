"use client";

import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using ToDApp, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Use License</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Permission is granted to temporarily use ToDApp for personal task management</li>
              <li>This license shall automatically terminate if you violate any of these restrictions</li>
              <li>Upon termination, you must destroy any downloaded materials</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Disclaimer</h2>
            <p className="text-muted-foreground">
              ToDApp is provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties, including without limitation implied warranties or conditions of merchantability.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall ToDApp or its suppliers be liable for any damages arising out of the use or inability to use the application.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}