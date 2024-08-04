import { serverAxios } from "../axiosOptions";

export interface IUploadMedia {
    ipfsHash: string;
    ipfsUrl: string;
    mimetype: string;
    ext: string;
}

export async function uploadMedia(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await serverAxios.post("metadata/uploadMedia", formData);
    return res.data as unknown as IUploadMedia;
}