import TransferNg from "../../static/images/transferng.png";
import Emmcoin from "../../static/images/emmcoin.png";
import WhichRide from "../../static/images/which_ride.png";
import { Props } from "./type";

export const ProjectsList: Array<Props> = [
  {
    image: TransferNg,
    name: "Transferhub NG",
    description:
      "TransferhubNG is an online platform designed to connect football players, coaches, agents accross teams different teams.",
    link: "https://transferng-site.netlify.app/",
  },
  {
    image: Emmcoin,
    name: "Emmcoin",
    description:
      "Emmcoin helps with various forms of online transactions, ranging from money transfers, airtime/data topup, crypto currencies etc",
    link: "https://www.emmcoin.com",
  },
  {
    image: WhichRide,
    name: "Which Ride",
    description:
      "Which ride is a simple landing page that is built for transportation services",
    link: "https://which-ride-webpage.netlify.app",
  },
];
