import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[99999] h-[4px] bg-[#D4AF37]"
      style={{ width: `${scroll}%` }}
    />
  );
};

export default ScrollProgress;