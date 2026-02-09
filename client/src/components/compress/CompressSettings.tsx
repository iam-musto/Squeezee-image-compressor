import React from "react";
import { Settings } from "lucide-react";
import type { CompressSettingsProps } from "../../types";

const CompressSettings: React.FC<CompressSettingsProps> = ({
  quality,
  onQualityChange,
  format,
  onFormatChange,
}) => {
  return (
    <div className="border-2 border-black p-6 bg-stone-100">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 stroke-black" strokeWidth={2} />
        <h3 className="text-xl font-bold text-black">Compression Settings</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quality Slider */}
        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Quality: {quality}%
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={quality}
            onChange={(e) => onQualityChange(Number(e.target.value))}
            className="w-full h-2 bg-stone-300 border-2 border-black appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, black ${quality}%, #d6d3d1 ${quality}%)`,
            }}
          />
          <div className="flex justify-between text-xs text-stone-600 mt-2">
            <span>Lower size</span>
            <span>Higher quality</span>
          </div>
        </div>

        {/* Format Selection */}
        <div>
          <label className="block text-sm font-semibold text-black mb-3">
            Output Format
          </label>
          <select
            value={format}
            onChange={(e) =>
              onFormatChange(e.target.value as "jpeg" | "png" | "webp")
            }
            className="w-full p-3 border-2 border-black bg-stone-100 text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="webp">WebP</option>
          </select>
        </div>
      </div>

      {/* Info Box */}
      <div className="border-2 border-black p-4 bg-stone-50 mt-6">
        <p className="text-sm text-stone-600">
          <strong className="text-black">Tip:</strong> Lower quality = smaller
          file size. Start with 80% for a good balance.
        </p>
      </div>
    </div>
  );
};

export default CompressSettings;
