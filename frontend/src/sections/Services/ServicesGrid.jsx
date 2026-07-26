import servicesData from "./servicesData";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;