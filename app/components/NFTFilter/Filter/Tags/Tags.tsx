import svgs from "@/app/components/Svgs";
import { PriceRange } from "../Filter";
import { MouseEventHandler } from "react";
import variables from "@/app/variables/variables";
type Props = {
  priceRange: PriceRange;
  showImages: boolean;
  showVideos: boolean;
  showMusics: boolean;
  showVerified: boolean;
  setPriceRange: (state: PriceRange) => void;
  setShowImages: (state: boolean) => void;
  setShowVideos: (state: boolean) => void;
  setShowMusics: (state: boolean) => void;
  setShowVerified: (state: boolean) => void;
};
const Tags = ({
  priceRange,
  showImages,
  showVideos,
  showMusics,
  showVerified,
  setPriceRange,
  setShowImages,
  setShowVideos,
  setShowMusics,
  setShowVerified,
}: Props) => {
  const getPriceRangeText = () => {
    const { floor, top } = priceRange;
    if (floor && top) {
      return `${floor} ~ ${top}ETH`;
    } else if (floor) {
      return `> ${floor}`;
    } else if (top) {
      return `< ${top}`;
    } else {
      return "all price";
    }
  };
  return (
    <ul className="text-xs flex gap-4 flex-wrap">
      <SingleTag
        onClick={() => {
          setPriceRange({
            floor: Number(Math.random().toFixed(2)),
            top: Number(Math.random().toFixed(2)),
          });
        }}
        name={getPriceRangeText()}
        active={true}
        iconLeft={<svgs.Wallet color="white" />}
        iconRight={<svgs.Disc color="white" />}
      />
      <SingleTag
        onClick={() => {
          setShowImages(!showImages);
        }}
        name="images"
        active={showImages}
        iconLeft={
          <svgs.Gallery color={showImages ? "white" : variables.textMain} />
        }
        iconRight={
          showImages ? (
            <svgs.CheckFill color="white" />
          ) : (
            <svgs.CheckLinear color={variables.textMain} />
          )
        }
      />
      <SingleTag
        onClick={() => {
          setShowVideos(!showVideos);
        }}
        name="videos"
        active={showVideos}
        iconLeft={
          <svgs.Videos color={showVideos ? "white" : variables.textMain} />
        }
        iconRight={
          showVideos ? (
            <svgs.CheckFill color="white" />
          ) : (
            <svgs.CheckLinear color={variables.textMain} />
          )
        }
      />
      <SingleTag
        onClick={() => {
          setShowMusics(!showMusics);
        }}
        name="musics"
        active={showMusics}
        iconLeft={
          <svgs.Music color={showMusics ? "white" : variables.textMain} />
        }
        iconRight={
          showMusics ? (
            <svgs.CheckFill color="white" />
          ) : (
            <svgs.CheckLinear color={variables.textMain} />
          )
        }
      />
      <SingleTag
        onClick={() => {
          setShowVerified(!showVerified);
        }}
        name="verified"
        active={showVerified}
        iconLeft={
          <svgs.Avatar color={showVerified ? "white" : variables.textMain} />
        }
        iconRight={
          showVerified ? (
            <svgs.CheckFill color="white" />
          ) : (
            <svgs.CheckLinear color={variables.textMain} />
          )
        }
      />
    </ul>
  );
};

export default Tags;

const SingleTag = ({
  name,
  active,
  iconLeft,
  iconRight,
  onClick,
}: {
  name: string;
  active: boolean;
  iconLeft: JSX.Element;
  iconRight: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const responsiveClasses = active
    ? "bg-gray-600 text-white"
    : "bg-gray-100 hover:bg-gray-200 hover:shadow-md";
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between gap-2 px-4 py-1 rounded-full transition-all ${responsiveClasses}`}
    >
      {iconLeft}
      <span>{name}</span>
      {iconRight}
    </button>
  );
};
