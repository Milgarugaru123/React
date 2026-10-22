import { motion } from "motion/react";

const Text = ({ desc }) => {
  console.log(desc);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ amount: 0.6, once: true }}
      className="h-100 text-5xl font-bold flex justify-center items-center bg-gray-300"
    >
      {desc}
    </motion.div>
  );
};

export default Text;
