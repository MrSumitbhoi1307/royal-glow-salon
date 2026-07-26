import BrandsHeader from "./BrandsHeader";
import BrandsSlider from "./BrandsSlider";

const Brands = () => {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b1b1b_0%,#050505_60%,#000000_100%)]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <BrandsHeader />

        <BrandsSlider />

      </div>
    </section>
  );
};

export default Brands;