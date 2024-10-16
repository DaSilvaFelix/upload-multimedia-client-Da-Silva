import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routers/routes.js";
import path from "node:path";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
app.use(express.static(path.join(path.resolve(), "src", "uploads")));

app.listen(4000, () => {
  console.log("server is running in http://localhost:4000");
});
