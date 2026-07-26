import footerData from "./footerData";

const FooterLinks = () => {
  return (
    <div>

      <h3 className="mb-6 text-xl font-semibold text-white">
        Quick Links
      </h3>

      <ul className="space-y-4">

        {footerData.quickLinks.map((link) => (

          <li key={link}>

            <a
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 transition hover:text-[#D4AF37]"
            >
              {link}
            </a>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default FooterLinks;