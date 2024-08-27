"use client";
import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import Cropper, { Area } from "react-easy-crop";
import { getOrientation } from "get-orientation/browser";
import { getRotatedImage, getCroppedImg } from "./canvasUtils";
import { toast } from "react-toastify";
import svgs from "../Svgs";
import { Button } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { hideCropper } from "@/app/lib/features/cropper/cropperSlice";
import {
  hideSpinner,
  showSpinner,
} from "@/app/lib/features/spinner/spinnerSlice";

const ORIENTATION_TO_ANGLE = {
  1: 0,
  2: 0,
  3: 180,
  4: 0,
  5: 0,
  6: -90,
  7: 0,
  8: 90,
};

const readFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        if (typeof reader.result !== "string") {
          reject(new Error("Invalid type of file"));
          return;
        }
        resolve(reader.result);
      },
      false,
    );
    reader.readAsDataURL(file);
  });
};

const ImageCropper = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const isOpen = useAppSelector((state) => state.cropper.isOpen);
  const aspectWidth = useAppSelector((state) => state.cropper.aspectWidth);
  const aspectHeight = useAppSelector((state) => state.cropper.aspectHeight);
  const onCropped = useAppSelector((state) => state.cropper.onCropped);

  const dispatch = useAppDispatch();

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      try {
        // apply rotation if needed
        const orientation = await getOrientation(file);
        const rotation = ORIENTATION_TO_ANGLE[orientation];
        if (rotation) {
          imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
        }
      } catch (e) {
        toast.warning("failed to detect the orientation");
      }

      setImageSrc(imageDataUrl);
    }
  };

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = useCallback(
    async (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if (file) {
        let imageDataUrl = await readFile(file);

        try {
          // apply rotation if needed
          const orientation = await getOrientation(file);
          const rotation = ORIENTATION_TO_ANGLE[orientation];
          if (rotation) {
            imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
          }
        } catch (e) {
          toast.warning("failed to detect the orientation");
        }

        setImageSrc(imageDataUrl);
      }
    },
    [],
  );

  const onDragOver: React.DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
    },
    [],
  );

  const resetCropper = () => {
    setImageSrc("");
    setCrop({ x: 0, y: 0 });
    setRotation(0);
    setZoom(1);
    setCroppedAreaPixels({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    });
  };

  const handleCrop = async () => {
    const croppedImage = await getCroppedImg(
      imageSrc,
      croppedAreaPixels,
      rotation,
    );
    if (!croppedImage) {
      toast.error("Cropping goes south");
      return;
    }
    dispatch(showSpinner());
    onCropped && (await onCropped(croppedImage));
    dispatch(hideCropper());
    resetCropper();
    dispatch(hideSpinner());
  };
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-overlay/50 backdrop-opacity-disabled">
      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-white md:w-[768px]">
        <div className="flex w-full justify-end pr-4 pt-4">
          <button
            className="transition-opacity hover:opacity-60"
            onClick={() => {
              dispatch(hideCropper());
              resetCropper();
            }}
          >
            <svgs.Close />
          </button>
        </div>
        <div
          className={`flex w-full ${imageSrc ? "h-16" : "h-64"} cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400`}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <input
            type="file"
            onChange={onFileChange}
            accept="image/*"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center text-gray-500"
          >
            <p>
              Drag and drop an image here or click to{" "}
              {imageSrc ? "reupload" : "upload"}
            </p>
            <p>
              Aspect ratio: {aspectWidth}:{aspectHeight}
            </p>
          </label>
        </div>
        {imageSrc && (
          <>
            <div className="relative flex h-96 w-full flex-col items-center justify-center bg-black">
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={aspectWidth / aspectHeight}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className="w-full p-4 pt-0">
              <Button
                onClick={handleCrop}
                fullWidth
              >
                Crop
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageCropper;
