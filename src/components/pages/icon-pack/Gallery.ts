import { createIconGallery } from "../../iconGallery";
import Account from "../../../assets/img/icon-pack/Account.svg?raw";
import Advice from "../../../assets/img/icon-pack/Advice.svg?raw";
import Bag from "../../../assets/img/icon-pack/Bag.svg?raw";
import Dotty from "../../../assets/img/icon-pack/Brand.svg?raw";
import Facebook from "../../../assets/img/icon-pack/Facebook.svg?raw";
import GiftCard from "../../../assets/img/icon-pack/Giftcard.svg?raw";
import Help from "../../../assets/img/icon-pack/Help.svg?raw";
import Instagram from "../../../assets/img/icon-pack/Instagram.svg?raw";
import Mail from "../../../assets/img/icon-pack/Mail.svg?raw";
import Menu from "../../../assets/img/icon-pack/Menu.svg?raw";
import New from "../../../assets/img/icon-pack/New.svg?raw";
import Opening from "../../../assets/img/icon-pack/Opening.svg?raw";
import Payment from "../../../assets/img/icon-pack/Wallet.svg?raw";
import Phone from "../../../assets/img/icon-pack/Phone.svg?raw";
import Pinterest from "../../../assets/img/icon-pack/Pinterest.svg?raw";
import Sale from "../../../assets/img/icon-pack/Sale.svg?raw";
import Satisfaction from "../../../assets/img/icon-pack/Satisfaction.svg?raw";
import Search from "../../../assets/img/icon-pack/Search.svg?raw";
import Secure from "../../../assets/img/icon-pack/Secure.svg?raw";
import Shipping from "../../../assets/img/icon-pack/Shipping.svg?raw";
import Store from "../../../assets/img/icon-pack/Storefront.svg?raw";
import TikTok from "../../../assets/img/icon-pack/TikTok.svg?raw";
import Whatsapp from "../../../assets/img/icon-pack/Whatsapp.svg?raw";
import Wishlist from "../../../assets/img/icon-pack/Wishlist.svg?raw";

export function CaseIconGallery(): HTMLElement {
  const iconArray = [
    Sale,
    New,
    Advice,
    Bag,
    GiftCard,
    Menu,
    Opening,
    Payment,
    Phone,
    Account,
    Wishlist,
    Help,
    Mail,
    Satisfaction,
    Search,
    Secure,
    Shipping,
    Store,
    Dotty,
    Facebook,
    Instagram,
    Pinterest,
    TikTok,
    Whatsapp,
  ];

  const iconGallery = createIconGallery({
    items: iconArray,
  });

  return iconGallery;
}
