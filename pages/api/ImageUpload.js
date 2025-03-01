import fs from "fs/promises";
import path from "path";
import { adminFrontEndDomain } from "../../utils/config";

export const config = {
  api: {
    bodyParser: true, // Allow JSON body parsing
  },
};

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", adminFrontEndDomain);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { image, imageName, oldImagePath } = req.body;

    if (!image || !imageName) {
      return res.status(400).json({ success: false, message: "Missing image or imageName" });
    }

    // ✅ Extract Base64 Data
    const matches = image.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!matches) {
      return res.status(400).json({ success: false, message: "Invalid Base64 format" });
    }

    const fileExt = matches[1]; // Get the file extension (png, jpg, etc.)
    const base64Data = matches[2]; // Extract actual Base64 data

    // ✅ Convert Base64 to Buffer
    const buffer = Buffer.from(base64Data, "base64");

    // ✅ Define Upload Path
    const uploadDir = path.join(process.cwd(), "public/images/blog-thumbnail");
    await fs.mkdir(uploadDir, { recursive: true }); // Ensure directory exists

    const newFileName = `${imageName}`;
    const newPath = path.join(uploadDir, newFileName);

    // ✅ Delete Old Image If Exists
    if (oldImagePath) {
      const oldPath = path.join(uploadDir, path.basename(oldImagePath));
      try {
        await fs.unlink(oldPath);
      } catch (err) {
        console.warn("Old file not found, skipping deletion:", err.message);
      }
    }

    // ✅ Save the Image File
    await fs.writeFile(newPath, buffer);

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      imageUrl: `/images/blog-thumbnail/${newFileName}`,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
}
