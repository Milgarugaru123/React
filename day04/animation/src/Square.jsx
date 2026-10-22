import { motion } from "motion/react";
import { useState } from "react";

const Square = ({ bg }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex items-center">
      <motion.div
        initial={{ scale: 0 }}
        whileTap={{ scale: 2 }}
        onClick={() => {
          setIsHover((prev) => {
            return !prev;
          });
        }}
        animate={{ scale: 1, rotate: 540, transition: { duration: 3 } }}
        style={{
          width: `100px`,
          height: `100px`,
          backgroundColor: bg,
          borderRadius: `12px`,
        }}
      ></motion.div>
      {isHover && <div>👻</div>}
    </div>
  );
};

export default Square;
