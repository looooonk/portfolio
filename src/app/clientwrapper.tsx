"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname(); // Use client-side hook for the current path
    console.log(pathname)

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname} // Trigger animation on route change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}