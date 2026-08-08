import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Reveal = ({ children, variant }) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;