import express, { json } from "express";
import cors from "cors";
import bootstrap from "./src/modules/bootstrap.js";

const app = express();
const port = 3000;

app.use(json());
app.use(cors());

app.use('/api', bootstrap)

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
