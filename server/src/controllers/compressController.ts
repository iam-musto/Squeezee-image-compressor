import { Request, Response } from "express";
import { compressImage } from "../services/compress";

interface CompressedFile {
  compressedImage: string;
  originalName: string;
  compressedName: string;
  originalSize: number;
  compressedSize: number;
  sizeReduction: string;
}

const compressController = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[]; // Assuming multer is used for file uploads
    const { quality, format } = req.body;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files provided" });
    }
    // Validate quality and format
    const options = {
      quality: parseInt(quality, 10) || 80,
      format: format || "jpeg",
    };

    if (quality < 0 || quality > 100) {
      return res
        .status(400)
        .json({ error: "Quality must be between 0 and 100" });
    }

    // Process each file and compress it
    const compressedFiles: CompressedFile[] = await Promise.all(
      files.map(async (file: any) => {
        const originalSize = file.buffer.length;
        const compressedBuffer = await compressImage(file.buffer, options);
        const compressedSize = compressedBuffer.length;
        const sizeReduction = `${(((originalSize - compressedSize) / originalSize) * 100).toFixed(2)}%`;

        // Get the original filename without extension
        const originalNameWithoutExt = file.originalname.split(".")[0];
        const compressedFileName = `compressed-${originalNameWithoutExt}.${options.format}`;

        return {
          compressedImage: compressedBuffer.toString("base64"), // Convert buffer to base64 string for easier transmission
          originalName: file.originalname,
          compressedName: compressedFileName,
          originalSize,
          compressedSize,
          sizeReduction,
        };
      }),
    );
    res.json({ compressedFiles });
  } catch (error) {
    console.error("Compression error:", error);
    res.status(500).json({ error: "Compression failed" });
  }
};

export default compressController;
