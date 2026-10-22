import { motion } from "motion/react";

const Bean = ({ start, end }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: end }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 1, once: true }}
      className={`absolute bottom-0`}
      style={{ left: start }}
    >
      <img
        src="/swiper-03-03.png"
        alt="커피콩"
        className="w-40 h-40 object-cover"
      />
    </motion.div>
  );
};

export default Bean;
