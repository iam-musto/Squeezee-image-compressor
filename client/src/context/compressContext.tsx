import { createContext, useContext, useState, type ReactNode } from "react";
import compressionApi from "../services/compressionApi";
import type { CompressContextType, CompressedFile } from "../types";

const CompressContext = createContext<CompressContextType | undefined>(
  undefined,
);

export const CompressProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);
  const [compressedImages, setCompressedImages] = useState<
    CompressedFile[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const compressImages = async (
    files: File[],
    quality: number,
    format: "jpeg" | "png" | "webp",
  ) => {
    try {
      setIsLoading(true);
      const compressedFiles = await compressionApi({ files, quality, format });
      setCompressedImages(compressedFiles);
    } catch (error) {
      console.error("Error compressing images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CompressContext.Provider
      value={{
        selectedFiles,
        setSelectedFiles,
        isLoading,
        setIsLoading,
        compressImages,
        compressedImages,
        setCompressedImages,
      }}
    >
      {children}
    </CompressContext.Provider>
  );
};

export const useCompressContext = () => {
  const context = useContext(CompressContext);
  if (!context) {
    throw new Error(
      "useCompressContext must be used within a CompressProvider",
    );
  }
  return context;
};
