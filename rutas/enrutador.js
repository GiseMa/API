import { Router } from "express";
import rutasJugador from "./rutasJugador.js";
import rutasPuntajes from "./rutasPuntaje.js";

const enrutador = Router();
enrutador.use("/jugadores", rutasJugador);
enrutador.use("/puntajes", rutasPuntajes);

export default enrutador;


