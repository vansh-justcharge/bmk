import cursor from '../assets/icons/cursor_icon.png';
import star from '../assets/icons/star_icon.png';
import wallet from '../assets/icons/wallet_icon.png';
import plus from '../assets/icons/plus_icon.png';
import square from '../assets/icons/four_square_box.png';
import dash from '../assets/icons/three_dash_icon.png';


export const filterButtons = [
  {
    text: "Search location",
    icon: cursor,
    type: "input",
  },
  {
    text: "Rating",
    icon: star,
    type: "dropdown",
  },
  {
    text: "Budget",
    icon: wallet,
    type: "dropdown",
  },
  {
    text: "More filter",
    icon: plus,
    type: "filled",
  },
  {
    icon: square,
    type: "icon",
  },
  {
    icon: dash,
    type: "icon",
  },
  
];
