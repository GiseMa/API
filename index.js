import express from "express"
import conexion from "./conexion/conexion.js";
import {
 Jugadores, Puntajes
} from './Models/index.js';
import jugoresSeed from "./seed/jugadoresSeed.js";
import {PORT} from "./config/config.js"
import enrutador from "./rutas/enrutador.js";

const app = express();
app.use(express.json());
app.use("/api", enrutador);

await conexion.sync({force: true});
await jugoresSeed()



app.listen(PORT, () => {
    console.log("server Ok");
});
