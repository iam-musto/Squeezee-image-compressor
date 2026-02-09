import React from "react";
import { Image as ImageIcon } from "lucide-react";
import { formatSize } from "../../utils/formatSize";
import type { ImagePreviewProps } from "../../types";

const ImagePreview: React.FC<ImagePreviewProps> = ({
  originalName,
  compressedUrl,
  originalSize,
  compressedSize,
}) => {
  const savingsPercent =
    originalSize > 0
      ? Math.round(((originalSize - compressedSize) / originalSize) * 100)
      : 0;

  return (
    <div className="border-2 border-black p-4 bg-stone-100 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <ImageIcon className="w-5 h-5 stroke-black" strokeWidth={2} />
        <h3 className="text-base font-bold text-black truncate">
          {originalName}
        </h3>
      </div>

      {/* Single compressed image preview */}
      <div className="border-2 border-black bg-stone-50 p-2 mb-3 flex-1 overflow-hidden">
        {compressedUrl ? (
          <img
            src={compressedUrl}
            alt="Compressed"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-stone-400 text-sm">
            Processing...
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="border-2 border-black p-3 bg-stone-50 mb-3">
        <p className="text-center text-lg font-bold text-black mb-1">
          {savingsPercent}% Smaller
        </p>
        <div className="text-xs text-stone-600 space-y-1">
          <p>
            <strong>Original:</strong> {formatSize(originalSize)}
          </p>
          <p>
            <strong>Compressed:</strong> {formatSize(compressedSize)}
          </p>
          <p>
            <strong>Saved:</strong> {formatSize(originalSize - compressedSize)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
