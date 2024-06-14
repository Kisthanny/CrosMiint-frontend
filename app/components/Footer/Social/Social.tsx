import svgs from "@/app/components/Svgs";
import Logo from "../../Logo/Logo";
import Link from "next/link";

const Social = () => {
  return (
    <section className="flex flex-col gap-4 max-w-80 items-center md:items-start">
      <Logo />
      <p className="text-center md:text-left">
        The world's first and largest digital marketplace for crosschain crypto
        collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
        exclusive digital items.
      </p>
      <ul className="flex items-center gap-8">
        <li>
          <Link href="#">
            <svgs.FaceBook color="#55595e" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <svgs.Linkedin color="#55595e" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <svgs.X color="#55595e" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <svgs.Youtube color="#55595e" size={22} />
          </Link>
        </li>
        <li>
          <Link href="#">
            <svgs.Instagram color="#55595e" />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Social;
