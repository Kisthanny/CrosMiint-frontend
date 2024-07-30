"use client";
import React from "react";
import { Spinner } from "@nextui-org/react";
import { useAppSelector } from "@/app/lib/hooks";

export default function ISpinner() {
  const isOpen = useAppSelector((state) => state.spinner.isOpen);
  return (
    <div
      className={`${isOpen ? "" : "hidden"} fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-70`}
    >
      <Spinner
        size="lg"
        color="default"
      />
    </div>
  );
}
