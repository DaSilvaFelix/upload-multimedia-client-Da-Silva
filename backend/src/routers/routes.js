import { Router } from "express";
import { createProduct } from "../controllers/upload.controllers.js";
import { uploadImagen } from "../middleware/uploads.middleware.js";
const router = Router();
router.post("/", uploadImagen, createProduct);
export default router;
