"use client"
import { motion } from "motion/react"

export const RevealCta = ({ text, className }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "auto", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="overflow-hidden whitespace-nowrap"
    >
      <h2 className={className}>{text}</h2>
    </motion.div>
  )
}
