export interface ImageUploaderProps {
  onImagesSelect: (files: File[]) => void;
  selectedFiles?: File[] | null;
}

export interface ImagePreviewProps {
  originalName: string;
  compressedUrl: string | null;
  originalSize: number;
  compressedSize: number;
}

export interface CompressSettingsProps {
  quality: number;
  onQualityChange: (quality: number) => void;
  format: "jpeg" | "png" | "webp" | "avif" | "heic";
  onFormatChange: (format: "jpeg" | "png" | "webp" | "avif" | "heic") => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
