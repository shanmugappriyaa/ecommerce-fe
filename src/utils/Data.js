import { LiaShippingFastSolid } from "react-icons/lia";

import { BsGift } from "react-icons/bs";
import { PiHeadset } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";

import { BsCreditCard } from "react-icons/bs";

export const commonFile =
  "https://res.cloudinary.com/dmq6qfdjs/image/upload/v1700501899/ovfxoidib4tqwga62osf.jpg";

export const DEV_API_URL = "http://localhost:8000/";
export const PROD_API_URL = "https://shan-ecom-be.onrender.com/";

export const services = [
  {
    title: "Free Shipping",
    tagline: "From all orders over $5",
    image: <LiaShippingFastSolid className="service-icon" />,
  },

  {
    title: "Daily Surprise Offers",
    tagline: "save upto 25% OFF",
    image: <BsGift className="service-icon" />,
  },
  {
    title: "Support 24/7",
    tagline: "Shop with an Expert",
    image: <PiHeadset className="service-icon" />,
  },
  {
    title: "Affordable Prices",
    tagline: "Get Factory Default Price",
    image: <BiSolidOffer className="service-icon" />,
  },
  {
    title: "Secure Payment",
    tagline: "100% Protected Payment",
    image: <BsCreditCard className="service-icon" />,
  },
];
