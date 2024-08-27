"use client";
import svgs from "@/app/components/Svgs";
import variables from "@/app/variables/variables";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useParams } from "next/navigation";

const EditCollectionNav = ({
  saveChanges,
  isDiff,
}: {
  isDiff: boolean;
  saveChanges: () => Promise<void>;
}) => {
  const { id } = useParams();
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-20 w-full items-center justify-between px-8 py-4">
      <div className="flex items-center gap-4">
        <Link href={`/collection/${id}`}>
          <button className="rounded-full bg-white bg-opacity-[0.12] p-2 backdrop-blur-xl backdrop-filter transition-colors duration-200 ease-in-out hover:bg-opacity-20">
            <svgs.ArrowLine
              direction="Left"
              color={variables.bgEnd}
            />
          </button>
        </Link>
        <h2 className="text-nowrap text-lg font-semibold text-white">
          Design your page
        </h2>
      </div>
      <div className="flex items-center">
        <Button
          color="primary"
          isDisabled={!isDiff}
          onClick={saveChanges}
        >
          Save changes
        </Button>
      </div>
    </nav>
  );
};

export default EditCollectionNav;
