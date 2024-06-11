import LinkMenu from "../LinkMenu/LinkMenu";

export const helpCenter = [
  { name: "About", link: "about" },
  { name: "Contact Us", link: "contact-us" },
  { name: "Sign Up", link: "sign-up" },
  { name: "Login", link: "login" },
  { name: "Subscription", link: "subscription" },
];
const HelpCenter = () => {
  return <LinkMenu menuList={helpCenter} />;
};

export default HelpCenter;
