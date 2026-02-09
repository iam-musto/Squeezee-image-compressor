import { Router } from "express";
import compressController from "../controllers/compressController";
import upload from "../middleware/upload";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Image Compression API!" });
});

// Accept multiple files with field name "file" and form fields "quality" and "format"
router.post(
  "/compress",
  upload.array("file"), // Accept multiple files under the "file" field
  compressController,
);

export default router;
