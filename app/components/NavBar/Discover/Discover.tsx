import LinkMenu from "../LinkMenu/LinkMenu";

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
  return <LinkMenu menuList={discover} />;
};

export default Discover;
