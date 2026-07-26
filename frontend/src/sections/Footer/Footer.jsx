import { Link } from "react-router-dom";

import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterSocial from "./FooterSocial";
import footerData from "./footerData";

const Footer = () => {
  return (
    <footer className="border-t border-[#D4AF37]/10 bg-[#050505]">

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-4">

          <FooterLogo />

          <FooterLinks />

          <FooterServices />

          <FooterSocial />

        </div>

        {/* Franchise CTA */}

        <div className="mt-20 rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#111111] via-[#161616] to-[#111111] p-10">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <p className="uppercase tracking-[6px] text-[#D4AF37] font-semibold">
                Royal Glow Franchise
              </p>

              <h3 className="mt-3 text-4xl font-bold text-white">
                Own a Premium Luxury Salon
              </h3>

              <p className="mt-4 max-w-2xl text-gray-400 leading-8">
                Partner with Royal Glow Salon and start your own luxury salon
                with complete business support, academy training,
                branding and marketing assistance.
              </p>

            </div>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/franchise"
                className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.5)]"
              >
                Explore Franchise
              </Link>

              <Link
                to="/franchise-apply"
                className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                Apply Now
              </Link>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

          <p className="text-sm text-gray-500">
            {footerData.copyright}
          </p>

          <div className="flex items-center gap-8">

            <Link
              to="/privacy-policy"
              className="text-sm text-gray-500 transition duration-300 hover:text-[#D4AF37]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="text-sm text-gray-500 transition duration-300 hover:text-[#D4AF37]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;