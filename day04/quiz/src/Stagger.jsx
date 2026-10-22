import { motion } from "motion/react";

const Stagger = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={{ show: { transition: { staggerChildren: 0.3 } } }}
      viewport={{ amount: 1, once: true }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: `100px`, height: `100px`, backgroundColor: `red` }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: `100px`, height: `100px`, backgroundColor: `orange` }}
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1 },
        }}
        style={{ width: `100px`, height: `100px`, backgroundColor: `yellow` }}
      ></motion.div>
    </motion.div>
  );
};

export default Stagger;
