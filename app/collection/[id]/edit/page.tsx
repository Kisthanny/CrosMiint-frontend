"use client";
import EditCollectionNav from "./EditCollectionNav/EditCollectionNav";
import {
  getCollectionInfo,
  ICollection,
  updateCollection,
} from "@/app/api/server/collection";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CollectionEditor from "./CollectionEditor/CollectionEditor";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  hideSpinner,
  showSpinner,
} from "@/app/lib/features/spinner/spinnerSlice";
import { isEqual } from "lodash";
import { toast } from "react-toastify";
export default function CollectionEdit() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isLoading = useAppSelector((state) => state.spinner.isOpen);
  const currentUserId = useAppSelector((state) => state.user.id);
  const [collectionInfo, setCollectionInfo] = useState<ICollection | null>();
  const [serverCollectionData, setServerCollectionData] =
    useState<ICollection | null>();
  const [isDiff, setIsDiff] = useState(false);
  const init = async () => {
    if (!id) {
      return;
    }
    dispatch(showSpinner());
    const data = await getCollectionInfo(id as string);
    setCollectionInfo(data);
    setServerCollectionData(data);
    dispatch(hideSpinner());
  };
  useEffect(() => {
    init();
  }, []);

  const getComparedProps = (data: ICollection) => {
    const {
      logoURI,
      category,
      previewImages,
      bannerImageSrc,
      description,
      overviews,
    } = data;
    return {
      logoURI,
      category,
      previewImages,
      bannerImageSrc,
      description,
      overviews,
    };
  };

  useEffect(() => {
    if (!collectionInfo || !serverCollectionData) {
      setIsDiff(false);
      return;
    }
    setIsDiff(
      !isEqual(
        getComparedProps(collectionInfo),
        getComparedProps(serverCollectionData),
      ),
    );
  }, [collectionInfo, serverCollectionData]);

  const saveChanges = async () => {
    if (!collectionInfo) {
      toast.warning("Oops, something goes wrong");
      return;
    }
    dispatch(showSpinner());
    const data = await updateCollection(collectionInfo);
    setCollectionInfo(data);
    setServerCollectionData(data);
    dispatch(hideSpinner());
  };

  if (isLoading) {
    return <section className="h-screen w-screen bg-dark"></section>;
  }

  return (
    <section className="h-screen w-screen bg-dark">
      <EditCollectionNav
        saveChanges={saveChanges}
        isDiff={isDiff}
      />
      {!collectionInfo && (
        <div className="flex h-full w-full items-center justify-center bg-dark text-3xl text-white">
          404 | Collection Not Found
        </div>
      )}
      {collectionInfo && collectionInfo.owner.id !== currentUserId && (
        <div className="flex h-full w-full items-center justify-center bg-dark text-3xl text-white">
          403 | Forbidden
        </div>
      )}
      {collectionInfo && collectionInfo.owner.id === currentUserId && (
        <CollectionEditor
          collectionInfo={collectionInfo}
          setCollectionInfo={setCollectionInfo}
        />
      )}
    </section>
  );
}
