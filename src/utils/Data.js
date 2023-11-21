import { LiaShippingFastSolid } from "react-icons/lia";

import { BsGift } from "react-icons/bs";
import { PiHeadset } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";

import { BsCreditCard } from "react-icons/bs";

export const commonFile =
  "https://res.cloudinary.com/dmq6qfdjs/image/upload/v1700501899/ovfxoidib4tqwga62osf.jpg";

export const services = [
  {
    title: "Free Shipping",
    tagline: "From all orders over $5",
    image: <LiaShippingFastSolid />,
  },

  {
    title: "Daily Surprise Offers",
    tagline: "save upto 25% OFF",
    image: <BsGift />,
  },
  {
    title: "Support 24/7",
    tagline: "Shop with an Expert",
    image: <PiHeadset />,
  },
  {
    title: "Affordable Prices",
    tagline: "Get Factory Default Price",
    image: <BiSolidOffer />,
  },
  {
    title: "Secure Payment",
    tagline: "100% Protected Payment",
    image: <BsCreditCard />,
  },
];
