/// <reference types="vite/client" />
import { base64ToBlob } from "../utils/base64ToBlob";
import type { CompressionRequest, CompressionResponse } from "../types";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://squeezee-image-compressor.onrender.com/api";

const compressionApi = async ({
  files,
  quality,
  format,
}: CompressionRequest) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });
    formData.append("quality", quality.toString());
    formData.append("format", format);
    const response = await fetch(`${API_BASE_URL}/compress`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    const data = await response.json();
    const compressedResponse: CompressionResponse = [];
    for (const compressedFile of data.compressedFiles) {
      const blob = base64ToBlob(compressedFile.compressedImage, format);
      const compressedUrl = URL.createObjectURL(blob);
      const compressedSize = blob.size;
      const originalSize = compressedFile.originalSize;
      compressedResponse.push({
        compressedUrl,
        originalName: compressedFile.originalName,
        compressedName: compressedFile.compressedName,
        originalSize,
        compressedSize,
        sizeReduction: compressedFile.sizeReduction,
      });
    }
    return compressedResponse;
  } catch (error) {
    console.error("Compression API error:", error);
    throw error;
  }
};

export default compressionApi;
