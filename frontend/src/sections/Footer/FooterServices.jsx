import footerData from "./footerData";

const FooterServices = () => {
  return (
    <div>

      <h3 className="mb-6 text-xl font-semibold text-white">
        Services
      </h3>

      <ul className="space-y-4">

        {footerData.services.map((service) => (

          <li
            key={service}
            className="text-gray-400"
          >
            {service}
          </li>

        ))}

      </ul>

    </div>
  );
};

export default FooterServices;