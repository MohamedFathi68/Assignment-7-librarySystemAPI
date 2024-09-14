import express, { json } from "express";
import cors from "cors";
import bootstrap from "./src/modules/bootstrap.js";
import { connection } from "./src/database/database.connection.js";



const app = express();
const port = 3000;

app.use(json());
app.use(cors());

app.use('/api', bootstrap)


app.listen(port, () => console.log(`App listening on port ${port}!`));
