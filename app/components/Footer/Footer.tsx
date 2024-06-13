import Discover from "./Discover/Discover";
import Help from "./Help/Help";
import Social from "./Social/Social";
import Subscribe from "./Subscribe/Subscribe";

const Footer = () => {
  return (
    <footer className="min-w-[375px] bg-gray-100 p-4 md:p-16">
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between flex-wrap gap-12 w-full">
        <Social></Social>
        <Discover></Discover>
        <Help></Help>
        <Subscribe></Subscribe>
      </div>
    </footer>
  );
};

export default Footer;
