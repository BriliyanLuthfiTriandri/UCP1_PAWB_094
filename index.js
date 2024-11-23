import express from "express";
import bodyParser from "body-parser";
import bibitRoute from "./routes/Bibit.js";
import pupukRoute from "./routes/Pupuk.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/bibit", bibitRoute);
app.use("/pupuk", pupukRoute);

