import cors from "cors";
import express, { Application, Request, Response } from "express";
import { BicycleRouters } from "./app/modules/bicycle/bicycle.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

// product endpoint start here

app.use("/api/products", BicycleRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
