import Link from "next/link";

// DISCOVER NAVIGATION MENU
export const discover = [
  { name: "Collection", link: "collection" },
  { name: "Search", link: "search" },
  { name: "Author Profile", link: "author-profile" },
  { name: "NFT Details", link: "nft-detail" },
  { name: "Account Setting", link: "account-setting" },
  { name: "Connect Wallet", link: "connect-wallet" },
  { name: "Blog", link: "blog" },
];
const Discover = () => {
  return (
    <ul>
      {discover.map((e, i) => (
        <li key={i}>
          <Link href={e.link}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Discover;
