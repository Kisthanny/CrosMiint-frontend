"use client";
import { ICollection } from "@/app/api/server/collection";
import Banner from "./Banner/Banner";
import { Dispatch, SetStateAction } from "react";
const CollectionEditor = ({
  collectionInfo,
  setCollectionInfo,
}: {
  collectionInfo: ICollection;
  setCollectionInfo: Dispatch<SetStateAction<ICollection | null | undefined>>;
}) => {
  return (
    <section className="h-full w-full pt-20 lg:px-8">
      <div className="h-full w-full overflow-y-auto rounded-tl-2xl rounded-tr-2xl bg-gray-100">
        <Banner
          collectionInfo={collectionInfo}
          setCollectionInfo={setCollectionInfo}
        />
      </div>
    </section>
  );
};

export default CollectionEditor;
