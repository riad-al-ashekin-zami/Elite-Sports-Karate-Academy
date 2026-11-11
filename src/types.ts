/**
 * Elite Sports Karate Academy
 * Configuration, Placeholders, and Data Types
 * 
 * ACCURACY NOTICE:
 * All facts are strictly verified. Unknown details use clearly marked placeholders.
 */

// Confirmed street address taken directly from the academy's official promotional banner.
export const CONFIRM_ADDRESS: string = "Road-7, House-3, Suchona Housing, Mohammadpur, Dhaka, Bangladesh"; /* {{CONFIRM_ADDRESS}} */

// Editable placeholder for class schedule. Hidden until filled.
export const CLASS_SCHEDULE: string = ""; /* {{CLASS_SCHEDULE}} - Set when class timings are provided */

export interface AcademyContact {
  phone: string;
  phoneRaw: string;
  email: string;
  facebookUrl: string;
  area: string;
  country: string;
}

export const CONTACT_INFO: AcademyContact = {
  phone: "+880 1913-779433",
  phoneRaw: "+8801913779433",
  email: "elitesportsacademy80@gmail.com",
  facebookUrl: "https://www.facebook.com/share/1NSm1YVXUs/",
  area: "Mohammadpur, Dhaka",
  country: "Bangladesh",
};

export interface TimelineMilestone {
  year: string;
  title: string;
  details: string;
}

export const FOUNDER_TIMELINE: TimelineMilestone[] = [
  {
    year: "2013",
    title: "Began Formal Training",
    details: "Started martial arts training driven by childhood passion, balancing regular practice with professional commitments.",
  },
  {
    year: "2015",
    title: "First Black Belt",
    details: "Earned first Black Belt at Young Dragon Martial Art Center.",
  },
  {
    year: "2023",
    title: "3rd Place — Walton 1st National Karate Competition",
    details: "Secured 3rd place in the national competition organised by Bangladesh Fighter Karate Association; also competed in various online tournaments.",
  },
  {
    year: "2026",
    title: "1st World Open Taekwondo Championship",
    details: "Competed internationally at the 1st World Open Taekwondo Championship 2026 in Hyderabad, India.",
  },
];

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Dojo" | "Training" | "Outdoor" | "Championship" | "Founder" | "Banner";
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "dojo-ready",
    src: "/images/dojo-ready-pose.jpg",
    alt: "Students in the ready stance at the academy dojo",
    caption: "Students in the ready stance at the academy dojo",
    category: "Dojo",
  },
  {
    id: "dojo-training",
    src: "/images/dojo-training.jpg",
    alt: "Punching drill during a class, led by the black-belt instructor",
    caption: "Punching drill during a class, led by the black-belt instructor",
    category: "Training",
  },
  {
    id: "dojo-group",
    src: "/images/dojo-group.jpg",
    alt: "Academy members and students at the dojo",
    caption: "Academy members and students at the dojo",
    category: "Dojo",
  },
  {
    id: "outdoor-kata-1",
    src: "/images/outdoor-kata-1.jpg",
    alt: "Karate stances – orange, black and blue belt practitioners",
    caption: "Karate stances – orange, black and blue belt practitioners",
    category: "Outdoor",
  },
  {
    id: "outdoor-kata-2",
    src: "/images/outdoor-kata-2.jpg",
    alt: "Karate practice – practitioners of different ages and belts, including a young girl",
    caption: "Karate practice – practitioners of different ages and belts, including a young girl",
    category: "Outdoor",
  },
];

// All photos across the website for full-screen viewer
export const ALL_SITE_PHOTOS: GalleryPhoto[] = [
  ...GALLERY_PHOTOS,
  {
    id: "founder-medal",
    src: "/images/founder-medal.jpg",
    alt: "A man in a white taekwondo uniform with a green belt, holding a certificate and a medal, standing in front of the 1st World Open Taekwondo Championship 2026 backdrop",
    caption: "The founder holding a certificate and medal in front of the championship backdrop",
    category: "Founder",
  },
  {
    id: "founder-medal-ceremony",
    src: "/images/founder-medal-ceremony.jpg",
    alt: "A woman in a black blazer presenting a medal to a man in a white uniform with a green belt in front of the championship backdrop",
    caption: "Medal presentation ceremony in front of the championship backdrop",
    category: "Championship",
  },
  {
    id: "championship-plaque",
    src: "/images/championship-plaque.jpg",
    alt: "A woman in a black blazer presenting a plaque to a man in a black vest in front of the championship backdrop",
    caption: "Presentation of a plaque in front of the championship backdrop",
    category: "Championship",
  },
  {
    id: "championship-stage",
    src: "/images/championship-stage.jpg",
    alt: "Large group photo on stage at the championship with many national flags on the backdrop",
    caption: "Group gathering on stage at the championship with national flags on the backdrop",
    category: "Championship",
  },
  {
    id: "academy-banner",
    src: "/images/academy-banner.jpg",
    alt: "Elite Sports Karate Academy admission banner - Train Hard. Be Stronger.",
    caption: "Elite Sports Karate Academy Official Banner - Train Hard. Be Stronger.",
    category: "Banner",
  },
];
