import footerData from "./footerData";

const FooterLogo = () => {
  return (
    <div>

      <h2 className="text-3xl font-bold text-white">
        ROYAL
        <span className="text-[#D4AF37]"> GLOW</span>
      </h2>

      <p className="mt-2 uppercase tracking-[4px] text-[#D4AF37] text-sm">
        {footerData.tagline}
      </p>

      <p className="mt-6 max-w-sm leading-8 text-gray-400">
        {footerData.description}
      </p>

    </div>
  );
};

export default FooterLogo;