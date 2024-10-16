import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "src/uploads");
  },
  filename: (_req, file, cb) => {
    const originalName = crypto.randomUUID().toString() + path.extname(file.originalname);
    cb(null, originalName);
  },
});

const mb = 50;
const limits = { fileSize: 1024 * 1024 * mb };

const fileFilter = (_req, file, cb) => {
  const fileType = /png|jpeg/;
  const isValid = fileType.test(path.extname(file.originalname));
  if (!isValid) return cb(new Error("Solo se permite jpeg y png"));
  return cb(null, true);
};

export const upload = multer({
  storage,
  limits,
  fileFilter,
});
