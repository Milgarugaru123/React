import { motion } from "motion/react";

const Circle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ amount: 0.5 }}
      className="h-200 flex flex-col items-center gap-10"
    >
      <div className="w-100 h-100 rounded-full bg-red-600"></div>
      <h2 className="text-4xl">시사 IT 아카데미에 오신 걸 환영합니다.</h2>
      <p>IT 수업에 일본어도 하고요, 일본어 수업에 회화함.</p>
    </motion.div>
  );
};

export default Circle;
