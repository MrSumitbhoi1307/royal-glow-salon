import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const FooterSocial = () => {
  const socials = [
    {
      icon: FaInstagram,
      href: "#",
    },
    {
      icon: FaFacebookF,
      href: "#",
    },
    {
      icon: FaWhatsapp,
      href: "#",
    },
  ];

  return (
    <div>

      <h3 className="mb-6 text-xl font-semibold text-white">
        Follow Us
      </h3>

      <div className="flex gap-4">

        {socials.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#111111]
                text-white
                transition
                duration-300
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              <Icon size={20} />
            </a>
          );
        })}

      </div>

    </div>
  );
};

export default FooterSocial;