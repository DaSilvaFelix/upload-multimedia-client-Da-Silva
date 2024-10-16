import { upload } from "../setting/multer.setting.js";
export const uploadImagen = (req, res, next) => {
  const uploadSingle = upload.single("Image");
  uploadSingle(req, res, (err) => {
    if (!req.file || err) {
      console.log(err);
      return res.status(404).json({ message: "Error al subir un archivo" });
    }
    req.body["Image"] = req.file.filename;
    next();
  });
};
