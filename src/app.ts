import cors from "cors";
import express, { Application, Request, Response } from "express";
import { BicycleRouters } from "./app/modules/bicycle/bicycle.route";
import { OrderRouters } from "./app/modules/orders/order.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

// product endpoint start here

app.use("/api/products", BicycleRouters);

// order endpoint start here

app.use("/api/orders", OrderRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
