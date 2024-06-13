"use client";
import Image, { StaticImageData } from "next/image";
import Button from "../../Button/Button";

const Step = ({
  image,
  name,
  description,
  step,
}: {
  image: StaticImageData;
  name: string;
  description: string;
  step: number | string;
}) => {
  return (
    <div className="flex flex-col items-center gap-8 text-gray-600 max-w-[300px]">
      <Image src={image} alt={name} width={128} height={128}/>
      <Button btnName={`Step${step}`} />
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Step;
