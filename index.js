import "dotenv/config";
import express from "express";
import indexRutas from "./rutas/index.rutas.js";
import usersRoutes from './rutas/users.rutas.js';

const app = express();
const port = 4000;


app.use(express.json());
app.use(indexRutas);
app.use(usersRoutes);

app.listen(port, console.log("http://localhost:" + port));
