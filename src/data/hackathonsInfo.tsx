import cq from "../assets/hackathons/conquest.png"
import hof from "../assets/hackathons/hackoverflow.png"
import iiser from "../assets/hackathons/IISER.jpg"
import kir from "../assets/hackathons/KIRIT.jpg"
import mt from "../assets/hackathons/Mountain.png"
import sih23 from "../assets/hackathons/SIH23.png"
import sih24 from "../assets/hackathons/SIH24.jpg"
import nit from "../assets/hackathons/TriNIT.jpg"
import ver from "../assets/hackathons/version.jpg"

interface Hackathon {
  title: string;
  subtitle : string,
  location: string;
  year: string;
  image: string;
}

const hackathonsInfo: Hackathon[] = [
  {
    title: "Conquest Hackathon",
    subtitle: "Organised by SATI",
    location: "Vidisha, India",
    year: "2024",
    image: cq,
  },
  {
    title: "HackOverflow 2.0",
    subtitle: "Organised by PHCET",
    location: "Mumbai, India",
    year: "2024",
    image: hof,
  },
  {
    title: "Version Beta 7.0",
    subtitle: "Organised by NIT Bhopal",
    location: "Bhopal, India",
    year: "2024",
    image: ver,
  },
  {
    title: "Arma Code 0 - National Level Hackathon",
    subtitle: "Organised by IISER Bhopal X IIIT Bhopal",
    location: "Bhopal, India",
    year: "2025",
    image: iiser,
  },
  {
      title: "Smart India Hackathon 2023",
      subtitle: "Organised by Govt. of India",
      location: "On Campus",
      year: "2023",
      image: sih23,
    },
    {
        title: "Smart India Hackathon 2024",
        subtitle: "Organised by Govt. of India",
        location: "On Campus",
        year: "2024",
        image: sih24,
    },
    {
      title: "Hack The Mountain 5.0",
      subtitle: "Organised by Sudan's Tech",
      location: "Rajkot, India",
      year: "2024",
      image: mt,
    },
    {
        title: "TriNIT Hackathon 3.0",
        subtitle: "Organised by NIT Trichy",
        location: "Online",
        year: "2024",
        image: nit,
    },
    {
      title: "KIRIT 4.0",
      subtitle: "Organised by KIM",
      location: "Karnataka",
      year: "2024",
      image: kir,
    },
];

export default hackathonsInfo;