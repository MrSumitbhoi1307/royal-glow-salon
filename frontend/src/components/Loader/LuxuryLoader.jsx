import "./LuxuryLoader.css";
import { useEffect, useState } from "react";

const LuxuryLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">

      <div className="loader-ring"></div>

      <h1 className="loader-title">
        ROYAL GLOW
      </h1>

      <p className="loader-subtitle">
        Luxury Beauty Redefined
      </p>

    </div>
  );
};

export default LuxuryLoader;