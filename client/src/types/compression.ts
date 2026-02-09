export interface CompressionRequest {
  files: File[];
  quality: number;
  format: "jpeg" | "png" | "webp";
}

export interface CompressedFile {
  compressedUrl: string;
  originalName: string;
  compressedName: string;
  originalSize: number;
  compressedSize: number;
  sizeReduction: string;
}

export type CompressionResponse = CompressedFile[];

export interface CompressedImage {
  id: string;
  originalFile: File;
  compressedUrl: string | null;
  originalSize: number;
  compressedSize: number;
}
