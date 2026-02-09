import type { Dispatch, SetStateAction } from "react";
import type { CompressedFile } from "./compression";

export interface CompressContextType {
  selectedFiles: File[] | null;
  setSelectedFiles: Dispatch<SetStateAction<File[] | null>>;
  compressedImages: CompressedFile[] | null;
  setCompressedImages: Dispatch<SetStateAction<CompressedFile[] | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  compressImages: (
    files: File[],
    quality: number,
    format: "jpeg" | "png" | "webp" | "avif" | "heic",
  ) => Promise<void>;
}
