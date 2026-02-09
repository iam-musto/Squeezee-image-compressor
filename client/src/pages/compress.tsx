import { useState, useCallback } from "react";
import {
  ImageUploader,
  CompressSettings,
  ImagePreview,
} from "../components/compress";
import Button from "../components/common/Button";
import { useCompressContext } from "../context/compressContext";

const CompressPage = () => {
  const [quality, setQuality] = useState<number>(80);
  const [format, setFormat] = useState<"jpeg" | "png" | "webp">("jpeg");

  const {
    selectedFiles,
    setSelectedFiles,
    compressedImages,
    setCompressedImages,
    isLoading,
    compressImages,
  } = useCompressContext();

  const handleImageSelect = useCallback((files: File[]) => {
    if (files.length > 0) {
      setSelectedFiles(files);
      setCompressedImages(null);
    }
  }, []);

  const handleCompress = useCallback(async () => {
    if (selectedFiles && selectedFiles.length > 0) {
      await compressImages(selectedFiles, quality, format);
    }
  }, [selectedFiles, quality, format]);

  const handleDownload = useCallback(() => {
    if (!compressedImages || compressedImages.length === 0) return;

    compressedImages.forEach((image) => {
      const link = document.createElement("a");
      link.href = image.compressedUrl;
      link.download = image.compressedName;
      link.click();
    });
  }, [compressedImages]);

  const handleReset = useCallback(() => {
    if (compressedImages && compressedImages.length > 0) {
      compressedImages.forEach((image) => {
        URL.revokeObjectURL(image.compressedUrl);
      });
    }
    setSelectedFiles(null);
    setCompressedImages(null);
  }, [compressedImages, setSelectedFiles, setCompressedImages]);

  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Compress Your Images
          </h1>
          <p className="text-lg text-stone-600">
            Upload your image and compress it instantly
          </p>
        </div>

        {/* Step 1: Image Selection / Preview - Hidden after compression */}
        {!compressedImages && (
          <div className="mb-6">
            <ImageUploader
              onImagesSelect={handleImageSelect}
              selectedFiles={selectedFiles}
            />
          </div>
        )}

        {/* Step 2: Settings (shown after image selection, hidden after compression) */}
        {selectedFiles && !compressedImages && (
          <div className="mb-6">
            <CompressSettings
              quality={quality}
              onQualityChange={setQuality}
              format={format}
              onFormatChange={setFormat}
            />
          </div>
        )}

        {/* Step 3: Compress Button */}
        {selectedFiles && !compressedImages && (
          <div className="mb-6 text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCompress}
              disabled={isLoading}
              className="w-full sm:w-auto min-w-50"
            >
              {isLoading
                ? "Compressing..."
                : `Compress ${selectedFiles.length} Image${selectedFiles.length > 1 ? "s" : ""}`}
            </Button>
          </div>
        )}

        {/* Step 4: Preview Section (shown after compression) */}
        {compressedImages && compressedImages.length > 0 && (
          <div className="mb-6">
            <div
              className={`grid gap-6 ${
                compressedImages.length === 1
                  ? "grid-cols-1"
                  : compressedImages.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {compressedImages.map((image, index) => (
                <ImagePreview
                  key={index}
                  originalName={image.originalName}
                  compressedUrl={image.compressedUrl}
                  originalSize={image.originalSize}
                  compressedSize={image.compressedSize}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Download Button */}
        {compressedImages && compressedImages.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleDownload}
              className="min-w-50"
            >
              {compressedImages.length === 1
                ? "Download Image"
                : "Download All"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleReset}
              className="min-w-50"
            >
              Start Over
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompressPage;
