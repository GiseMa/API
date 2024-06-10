import express from "express"
import conexion from "./conexion/conexion.js";
import {
 Jugadores, Puntajes
} from './Models/index.js';
import jugoresSeed from "./seed/jugadoresSeed.js";


const app = express();







await conexion.sync({force: false});
await jugoresSeed()

app.listen(8080, () => {
    console.log("server Ok");
});
