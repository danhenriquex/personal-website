import { motion } from "framer-motion";

export interface Technology {
  name: string;
  color: string;
  textColor: string;
}

export interface TechChipProps {
  tech: Technology;
  index: number;
}

export const TechChip = ({ tech }: TechChipProps) => {
  // Random position and animation values
  const randomX = Math.random() * 100 - 50;
  const randomY = Math.random() * 100 - 50;
  const randomDuration = 20 + Math.random() * 30;

  return (
    <motion.div
      className={`${tech.color} ${tech.textColor} px-4 py-2 rounded-full font-medium inline-block`}
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, randomX, -randomX, 0],
        y: [0, randomY, -randomY, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {tech.name}
    </motion.div>
  );
};
