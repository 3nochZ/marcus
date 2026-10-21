// Hotlinked media from marcusaddis.com getbento CDN.
const B = "https://images.getbento.com/accounts/6b5edba5e665d46bb82e6c7f5c501f9a/media/images";

export const MEDIA = {
  logo: `${B}/98238logo.png`,
  logoVertical: `${B}/74614logoVertical.png`,
  homeFood: `${B}/27611homepage_our_food.jpg`,
  homeLocation: `${B}/57090homepage_our_location.jpg`,
  homeSecondary: `${B}/77486j8sro46g.jpeg`,
  aboutA: `${B}/25304IMG_4654.jpeg`,
  aboutB: `${B}/26749IMG_4657.jpeg`,
  aboutC: `${B}/64362IMG_4653.jpeg`,
  aboutD: `${B}/55246IMG_1377.jpg`,
  aboutE: `${B}/64314Photo_Jan_03_11_52_52_AM.jpg`,
  aboutF: `${B}/93915unnamed.jpeg`,
  chef: `${B}/31482684213CF776CE-.jpg`,
  artist: `${B}/4584ARFoDCCKQhCaliCEJvnk_Screen_Shot_2023-01-06_at_4.22.09_PM.jpg`,
  locationHeader: `${B}/82476hours_location_header.jpg`,
  menusHeader1: `${B}/1446menus_header1.jpg`,
  menusHeader2: `${B}/75341_menus_header2.jpg`,
  eventsHeader: `${B}/64992private_events_header.jpg`,
  eventsRoom1: `${B}/40120private_events_room1.jpg`,
  eventsRoom2: `${B}/86696private_events_room2.jpg`,
  eventsRoom3: `${B}/44961private_events_room3.jpg`,
} as const;

export const MARCUS_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/marcus/about" },
  { label: "Menus", href: "/marcus/menus" },
  { label: "Private Events", href: "/marcus/private-events" },
  { label: "Location & Hours", href: "/marcus/location" },
  { label: "Press", href: "/marcus/press" },
  { label: "Careers", href: "/marcus/careers" },
  { label: "Contact", href: "/marcus/contact" },
];
