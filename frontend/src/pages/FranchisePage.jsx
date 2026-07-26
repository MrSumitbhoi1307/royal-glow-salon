import Navbar from "../components/layout/Navbar";
import Footer from "../sections/Footer/Footer";

import FranchiseHero from "../sections/Franchise/FranchiseHero";
import FranchiseWhyChoose from "../sections/Franchise/FranchiseWhyChoose";
import FranchiseInvestmentPlans from "../sections/Franchise/FranchiseInvestmentPlans";
import FranchiseSupport from "../sections/Franchise/FranchiseSupport";
import FranchiseProcess from "../sections/Franchise/FranchiseProcess";
import FranchiseFAQ from "../sections/Franchise/FranchiseFAQ";
import FranchiseCTA from "../sections/Franchise/FranchiseCTA";

const FranchisePage = () => {
  return (
    <>
      <Navbar />

      <FranchiseHero />
      <FranchiseWhyChoose />
      <FranchiseInvestmentPlans />
      <FranchiseSupport />
      <FranchiseProcess />
      <FranchiseFAQ />
      <FranchiseCTA />

      <Footer />
    </>
  );
};

export default FranchisePage;