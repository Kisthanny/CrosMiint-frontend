import Link from "next/link";
export const helpCenter = [
  { name: "About", link: "about" },
  { name: "Contact Us", link: "contact-us" },
  { name: "Sign Up", link: "sign-up" },
  { name: "Login", link: "login" },
  { name: "Subscription", link: "subscription" },
];
const HelpCenter = () => {
  return (
    <ul>
      {helpCenter.map((e) => (
        <li>
          <Link href={e.link}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HelpCenter;
