import { instance } from "../axios";
import { FileUploadResponse } from "./response";

const router = '/files';

export const uploadFile = async (file: FormData): Promise<string> => {
  const { data } = await instance.post<FileUploadResponse>(
    router,
    file,
  );
  return data.file_url;
};
