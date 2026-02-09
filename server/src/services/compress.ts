import sharp from "sharp";

interface CompressOptions {
  quality: number;
  format: "jpeg" | "png" | "webp";
}

export const compressImage = async (
  buffer: Buffer,
  options: CompressOptions,
) => {
  try {
    let image = sharp(buffer);
    const metadata = await image.metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);

    // Resize large images to reduce file size
    if (metadata.width && metadata.width > 2000) {
      image = image.resize(2000, 2000, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    switch (options.format) {
      case "jpeg":
        image = image.jpeg({
          quality: options.quality,
          progressive: true,
          mozjpeg: true,
        });
        break;
      case "png":
        // PNG compression: apply multiple optimization strategies
        const pngQuality = Math.ceil((options.quality / 100) * 9);
        image = image.png({
          compressionLevel: 9, // Maximum compression
          adaptiveFiltering: true, // Better compression
          colors: 256, // Reduce palette to max 256 colors
        });
        break;
      case "webp":
        image = image.webp({ quality: options.quality });
        break;
      default:
        throw new Error("Unsupported format");
    }
    const compressedBuffer = await image.toBuffer();
    return compressedBuffer;
  } catch (error) {
    console.error("Error compressing image:", error);
    throw error;
  }
};
