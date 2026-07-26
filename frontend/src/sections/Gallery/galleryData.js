// ==========================
// LADIES IMAGES
// ==========================

import ladiesClient1HairStyling from "../../assets/images/gallery/ladies/ladies-client1-hair-styling.jpeg";
import ladiesClient1HairColoring from "../../assets/images/gallery/ladies/ladies-client1-hair-coloring.jpeg";
import ladiesClient1SkinCare from "../../assets/images/gallery/ladies/ladies-client1-skin-care.jpeg";
import ladiesClient1Spa from "../../assets/images/gallery/ladies/ladies-client1-spa.jpeg";
import ladiesClient1ManicurePedicure from "../../assets/images/gallery/ladies/ladies-client1-manicure-pedicure.jpeg";
import ladiesClient1BridalMakeup from "../../assets/images/gallery/ladies/ladies-client1-bridal-makeup.jpeg";

import ladiesClient2HairStyling from "../../assets/images/gallery/ladies/ladies-client2-hair-styling.jpeg";
import ladiesClient2HairColoring from "../../assets/images/gallery/ladies/ladies-client2-hair-coloring.jpeg";
import ladiesClient2SkinCare from "../../assets/images/gallery/ladies/ladies-client2-skin-care.jpeg";
import ladiesClient2Spa from "../../assets/images/gallery/ladies/ladies-client2-spa.jpeg";
import ladiesClient2ManicurePedicure from "../../assets/images/gallery/ladies/ladies-client2-manicure-pedicure.jpeg";
import ladiesClient2BridalMakeup from "../../assets/images/gallery/ladies/ladies-client2-bridal-makeup.jpeg";

import ladiesClient3HairStyling from "../../assets/images/gallery/ladies/ladies-client3-hair-styling.jpeg";
import ladiesClient3HairColoring from "../../assets/images/gallery/ladies/ladies-client3-hair-coloring.jpeg";
import ladiesClient3SkinCare from "../../assets/images/gallery/ladies/ladies-client3-skin-care.jpeg";
import ladiesClient3Spa from "../../assets/images/gallery/ladies/ladies-client3-spa.jpeg";
import ladiesClient3ManicurePedicure from "../../assets/images/gallery/ladies/ladies-client3-manicure-pedicure.jpeg";
import ladiesClient3BridalMakeup from "../../assets/images/gallery/ladies/ladies-client3-bridal-makeup.jpeg";

// ==========================
// GENTS IMAGES
// ==========================

import gentsClient1Haircut from "../../assets/images/gallery/gents/gents-client1-haircut.jpeg";
import gentsClient1BeardGrooming from "../../assets/images/gallery/gents/gents-client1-beard-grooming.jpeg";
import gentsClient1HairWash from "../../assets/images/gallery/gents/gents-client1-hair-wash.jpeg";
import gentsClient1HeadMassage from "../../assets/images/gallery/gents/gents-client1-head-massage.jpeg";
import gentsClient1Facial from "../../assets/images/gallery/gents/gents-client1-facial.jpeg";
import gentsClient1Spa from "../../assets/images/gallery/gents/gents-client1-spa.jpeg";

import gentsClient2Haircut from "../../assets/images/gallery/gents/gents-client2-haircut.jpeg";
import gentsClient2BeardGrooming from "../../assets/images/gallery/gents/gents-client2-beard-grooming.jpeg";
import gentsClient2HairWash from "../../assets/images/gallery/gents/gents-client2-hair-wash.jpeg";
import gentsClient2HeadMassage from "../../assets/images/gallery/gents/gents-client2-head-massage.jpeg";
import gentsClient2Facial from "../../assets/images/gallery/gents/gents-client2-facial.jpeg";
import gentsClient2Spa from "../../assets/images/gallery/gents/gents-client2-spa.jpeg";

import gentsClient3Haircut from "../../assets/images/gallery/gents/gents-client3-haircut.jpeg";
import gentsClient3BeardGrooming from "../../assets/images/gallery/gents/gents-client3-beard-grooming.jpeg";
import gentsClient3HairWash from "../../assets/images/gallery/gents/gents-client3-hair-wash.jpeg";
import gentsClient3HeadMassage from "../../assets/images/gallery/gents/gents-client3-head-massage.jpeg";
import gentsClient3Facial from "../../assets/images/gallery/gents/gents-client3-facial.jpeg";
import gentsClient3Spa from "../../assets/images/gallery/gents/gents-client3-spa.jpeg";

// ==========================
// GALLERY DATA
// ==========================

const galleryData = [
  // ---------- Ladies Client 1 ----------
  { id: 1, image: ladiesClient1HairStyling, category: "Ladies", service: "Hair Styling", client: "Client 1" },
  { id: 2, image: ladiesClient1HairColoring, category: "Ladies", service: "Hair Coloring", client: "Client 1" },
  { id: 3, image: ladiesClient1SkinCare, category: "Ladies", service: "Skin Care", client: "Client 1" },
  { id: 4, image: ladiesClient1Spa, category: "Ladies", service: "Spa", client: "Client 1" },
  { id: 5, image: ladiesClient1ManicurePedicure, category: "Ladies", service: "Manicure & Pedicure", client: "Client 1" },
  { id: 6, image: ladiesClient1BridalMakeup, category: "Ladies", service: "Bridal Makeup", client: "Client 1" },

  // ---------- Ladies Client 2 ----------
  { id: 7, image: ladiesClient2HairStyling, category: "Ladies", service: "Hair Styling", client: "Client 2" },
  { id: 8, image: ladiesClient2HairColoring, category: "Ladies", service: "Hair Coloring", client: "Client 2" },
  { id: 9, image: ladiesClient2SkinCare, category: "Ladies", service: "Skin Care", client: "Client 2" },
  { id: 10, image: ladiesClient2Spa, category: "Ladies", service: "Spa", client: "Client 2" },
  { id: 11, image: ladiesClient2ManicurePedicure, category: "Ladies", service: "Manicure & Pedicure", client: "Client 2" },
  { id: 12, image: ladiesClient2BridalMakeup, category: "Ladies", service: "Bridal Makeup", client: "Client 2" },

  // ---------- Ladies Client 3 ----------
  { id: 13, image: ladiesClient3HairStyling, category: "Ladies", service: "Hair Styling", client: "Client 3" },
  { id: 14, image: ladiesClient3HairColoring, category: "Ladies", service: "Hair Coloring", client: "Client 3" },
  { id: 15, image: ladiesClient3SkinCare, category: "Ladies", service: "Skin Care", client: "Client 3" },
  { id: 16, image: ladiesClient3Spa, category: "Ladies", service: "Spa", client: "Client 3" },
  { id: 17, image: ladiesClient3ManicurePedicure, category: "Ladies", service: "Manicure & Pedicure", client: "Client 3" },
  { id: 18, image: ladiesClient3BridalMakeup, category: "Ladies", service: "Bridal Makeup", client: "Client 3" },

  // ---------- Gents Client 1 ----------
  { id: 19, image: gentsClient1Haircut, category: "Gents", service: "Haircut", client: "Client 1" },
  { id: 20, image: gentsClient1BeardGrooming, category: "Gents", service: "Beard Grooming", client: "Client 1" },
  { id: 21, image: gentsClient1HairWash, category: "Gents", service: "Hair Wash", client: "Client 1" },
  { id: 22, image: gentsClient1HeadMassage, category: "Gents", service: "Head Massage", client: "Client 1" },
  { id: 23, image: gentsClient1Facial, category: "Gents", service: "Facial", client: "Client 1" },
  { id: 24, image: gentsClient1Spa, category: "Gents", service: "Spa", client: "Client 1" },

  // ---------- Gents Client 2 ----------
  { id: 25, image: gentsClient2Haircut, category: "Gents", service: "Haircut", client: "Client 2" },
  { id: 26, image: gentsClient2BeardGrooming, category: "Gents", service: "Beard Grooming", client: "Client 2" },
  { id: 27, image: gentsClient2HairWash, category: "Gents", service: "Hair Wash", client: "Client 2" },
  { id: 28, image: gentsClient2HeadMassage, category: "Gents", service: "Head Massage", client: "Client 2" },
  { id: 29, image: gentsClient2Facial, category: "Gents", service: "Facial", client: "Client 2" },
  { id: 30, image: gentsClient2Spa, category: "Gents", service: "Spa", client: "Client 2" },

  // ---------- Gents Client 3 ----------
  { id: 31, image: gentsClient3Haircut, category: "Gents", service: "Haircut", client: "Client 3" },
  { id: 32, image: gentsClient3BeardGrooming, category: "Gents", service: "Beard Grooming", client: "Client 3" },
  { id: 33, image: gentsClient3HairWash, category: "Gents", service: "Hair Wash", client: "Client 3" },
  { id: 34, image: gentsClient3HeadMassage, category: "Gents", service: "Head Massage", client: "Client 3" },
  { id: 35, image: gentsClient3Facial, category: "Gents", service: "Facial", client: "Client 3" },
  { id: 36, image: gentsClient3Spa, category: "Gents", service: "Spa", client: "Client 3" },
];

export default galleryData;