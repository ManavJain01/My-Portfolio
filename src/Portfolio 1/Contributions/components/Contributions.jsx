// Importing Framer Motion
import { motion } from "framer-motion"

export default function Contributions({ darkTheme }) {
  return (
    <div className="flex flex-col gap-20 py-20 pb-96">
      {/* Contributions */}
      <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className="text-6xl font-semibold">Contributions</motion.h1>
    </div>
  )
}