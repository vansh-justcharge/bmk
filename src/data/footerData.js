import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import twitter from '../assets/icons/twitter.png';
import dribbble from '../assets/icons/dribbble.png';

const footerData = {
  contact: {
    label: "Contact",
    email: "Hi@Book.com",
    phone: "+62821–5949–5854",
  },
  locations: {
    india: {
      title: "India",
      address: "No. 456, Mango Lane\nBangalore, Karnataka, 560001",
    },
    mumbai: {
      title: "Mumbai",
      address: "123, Shanti Nagar\nMumbai, Maharashtra, 400001",
    },
  },
  socialIcons: [
    { alt: "Facebook", src: facebook,link: "https://www.facebook.com/yourprofile" },
    { alt: "Instagram", src: instagram ,link: "https://www.instagram.com/yourprofile" },
    { alt: "LinkedIn", src: linkedin,link: "https://www.linkedin.com/yourprofile" },
    { alt: "Twitter", src: twitter,link: "https://www.twitter.com/yourprofile" },
    { alt: "Dribbble", src: dribbble,link: "https://www.dribblecom/yourprofile" },
  ],
};

export default footerData;
