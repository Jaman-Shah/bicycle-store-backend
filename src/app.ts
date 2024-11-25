import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
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
  res.send("Home page");
});

// Not Found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
