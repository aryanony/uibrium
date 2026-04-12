'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full animate-pulse" />
          
          <div className="relative flex flex-col items-center gap-12">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
              }}
              className="relative w-32 h-32 flex items-center justify-center"
            >
              {/* Spinning Ring */}
              <motion.div
                animate={{ 
                  borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
                  scale: [0.9, 1.1, 0.9],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-primary/30 backdrop-blur-3xl shadow-[0_0_40px_rgba(var(--primary),0.2)]"
              />
              {/* Inner Logic Core */}
              <motion.div
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 bg-primary rounded-xl shadow-[0_0_30px_rgba(var(--primary),0.5)]"
              />
            </motion.div>

            {/* Branded Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { delay: 0.5, duration: 0.8 }
              }}
              className="mt-12 text-center"
            >
              <h2 className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary tracking-[0.2em] uppercase">
                UiBrium
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1 }}
                className="text-xs font-mono mt-3 tracking-widest uppercase"
              >
                Architecting Equilibrium
              </motion.p>
            </motion.div>

            {/* Progress Line */}
            <div className="absolute -bottom-24 w-48 h-[1px] bg-muted overflow-hidden">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
