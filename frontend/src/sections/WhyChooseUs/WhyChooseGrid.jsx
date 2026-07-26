import whyChooseData from "./whyChooseData";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseGrid = () => {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {whyChooseData.map((item) => (

        <WhyChooseCard
          key={item.id}
          item={item}
        />

      ))}

    </div>
  );
};

export default WhyChooseGrid;