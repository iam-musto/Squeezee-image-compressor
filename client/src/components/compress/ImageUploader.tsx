import React, { useCallback, useState, useEffect } from "react";
import { ImagePlus, Image, X } from "lucide-react";
import Button from "../common/Button";
import type { ImageUploaderProps } from "../../types";
import { formatSize } from "../../utils/formatSize";

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImagesSelect,
  selectedFiles,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  // Cleanup preview URLs on unmount and when images change
  useEffect(() => {
    return () => {
      imagePreviewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  useEffect(() => {
    // Generate preview URLs for selected files
    if (selectedFiles && selectedFiles.length > 0) {
      const urls = selectedFiles.map((file) => URL.createObjectURL(file));
      setImagePreviewUrls(urls);
      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    } else {
      setImagePreviewUrls([]);
    }
  }, [selectedFiles]);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files).filter((file) =>
        file.type.startsWith("image/"),
      );

      if (files.length > 0) {
        onImagesSelect(files);
      }
    },
    [onImagesSelect],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        onImagesSelect(Array.from(files));
      }
      // Reset input value to allow selecting the same file again
      e.target.value = "";
    },
    [onImagesSelect],
  );

  const handleButtonClick = () => {
    document.getElementById("file-upload")?.click();
  };

  const handleRemoveImage = (indexToRemove: number) => {
    if (selectedFiles) {
      const updatedFiles = selectedFiles.filter(
        (_, index) => index !== indexToRemove,
      );
      onImagesSelect(updatedFiles);
    }
  };

  // If image is selected, show it
  if (selectedFiles && selectedFiles.length > 0) {
    // Dynamic grid columns based on number of images
    const getGridCols = () => {
      if (selectedFiles.length === 1) return "grid-cols-1";
      if (selectedFiles.length === 2) return "grid-cols-1 md:grid-cols-2";
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    };

    return (
      <div className="border-4 border-black p-6 bg-stone-100">
        <div className="flex items-center gap-3 mb-4">
          <Image className="w-6 h-6 stroke-black" strokeWidth={2} />
          <h3 className="text-lg font-bold text-black">
            Selected Images ({selectedFiles.length})
          </h3>
        </div>

        {/* Mobile-first responsive grid */}
        <div className={`grid ${getGridCols()} gap-4 mb-4`}>
          {selectedFiles.map((file: File, index: number) => (
            <div
              key={index}
              className="border-2 border-black bg-stone-50 p-3 relative"
            >
              {/* Delete button */}
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-2 right-2 p-1 bg-black hover:bg-stone-800 transition-colors z-10"
                aria-label="Remove image"
              >
                <X className="w-4 h-4 stroke-stone-100" strokeWidth={2} />
              </button>

              <div className="aspect-square overflow-hidden mb-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs text-stone-600 space-y-1">
                <p className="truncate" title={file.name}>
                  <strong>File:</strong> {file.name}
                </p>
                <p>
                  <strong>Original Size:</strong> {formatSize(file.size)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={handleButtonClick}
          className="mt-4 w-full"
        >
          Change Images
        </Button>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />
      </div>
    );
  }

  // Default upload view
  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-4 border-dashed border-black p-8 sm:p-12 md:p-16 text-center transition-colors ${
        isDragging ? "bg-stone-200" : "bg-stone-100"
      }`}
    >
      <div className="max-w-md mx-auto">
        <ImagePlus
          className="w-16 h-16 mx-auto mb-6 stroke-black"
          strokeWidth={2}
        />
        <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Drop your images here
        </h3>
        <p className="text-stone-600 mb-6">
          or click the button below to select files
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={handleButtonClick}
          className="cursor-pointer"
        >
          Select Images
        </Button>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />
        <p className="text-sm text-stone-500 mt-4">
          Supports: JPG, PNG, WebP, GIF, and more
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
