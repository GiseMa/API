import { Router } from "express";
import rutasJugador from "./rutasJugador.js";
import rutasPuntajes from "./rutasPuntaje.js";
import rutasJunPun from "./rutasJunPun.js";

const enrutador = Router();
enrutador.use("/jugadores", rutasJugador);
enrutador.use("/puntajes", rutasPuntajes);
enrutador.use("/junpun", rutasJunPun);

export default enrutador;


