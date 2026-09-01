"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Share2 } from "lucide-react";

const buttons = [
    {
        label: "Call Us",
        href: "tel:+919136154481",
        icon: Phone,
        className: "bg-blue-600 hover:bg-blue-700",
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/919136154481",
        icon: MessageCircle,
        className: "bg-green-500 hover:bg-green-600",
    },

];

export default function FloatingButtons() {
    return (
        <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-3">
            {buttons.map((button, index) => {
                const Icon = button.icon;

                return (
                    <motion.a
                        key={button.label}
                        href={button.href}
                        target={button.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                            button.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                        }
                        aria-label={button.label}
                        initial={{
                            opacity: 0,
                            x: 50,
                            scale: 0.7,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            delay: index * 0.12,
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            scale: 1.12,
                            y: -4,
                        }}
                        whileTap={{
                            scale: 0.92,
                        }}
                        className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-colors duration-300 sm:h-14 sm:w-14 ${button.className}`}
                    >
                        <motion.div
                            animate={{
                                y: [0, -2, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2,
                            }}
                        >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.div>

                        {/* Tooltip */}
                        <span
                            className="
                pointer-events-none
                absolute right-16
                whitespace-nowrap
                rounded-lg
                bg-black px-3 py-2
                text-xs font-medium text-white
                opacity-0 translate-x-2
                transition-all duration-200
                group-hover:translate-x-0
                group-hover:opacity-100
              "
                        >
                            {button.label}
                        </span>
                    </motion.a>
                );
            })}
        </div>
    );
}