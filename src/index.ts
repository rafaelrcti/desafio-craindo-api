import express from "express";
import swaggerUI from "swagger-ui-express";

import swaggerFile from "../swagger.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use("/users", usersRoutes);

export { app };
