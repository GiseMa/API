import express from "express"
import conexion from "./conexion/conexion.js";
import {
 Jugadores, Puntajes
} from './Models/index.js';


const app = express();







await conexion.sync({
    force: true
})

app.listen(8080, () => {
    console.log("server Ok");
});
