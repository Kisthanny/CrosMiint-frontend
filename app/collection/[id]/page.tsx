"use client";
import { useParams } from "next/navigation";
import Banner from "./Banner/Banner";
import Description from "./Description/Description";
import { useState } from "react";

export default function Airdrop() {
  const { id } = useParams();

  const [collectionInfo, setCollectionInfo] = useState(null);

  return (
    <section>
      <Banner />
      <Description />
    </section>
  );
}
