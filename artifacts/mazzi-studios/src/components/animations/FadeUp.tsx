import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  once?: boolean;
}

export function FadeUp({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  className = "",
  amount = 0.2,
  once = true
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ 
  children, 
  className = "", 
  delayChildren = 0.1, 
  staggerChildren = 0.1 
}: { 
  children: ReactNode, 
  className?: string,
  delayChildren?: number,
  staggerChildren?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}