import { motion } from "motion/react";

const Tween = () => {
  return (
    <motion.div
      className="w-100 h-100 bg-sky-400 rounded-lg"
      initial={{ x: 0 }}
      whileInView={{ x: 200 }}
      transition={{ type: "tween", duration: 1, ease: [1, 0, 0, 1] }}
      viewport={{ amount: 0.5 }}
    ></motion.div>
  );
};

export default Tween;
