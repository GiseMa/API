import { Router } from "express";
import rutasJuego from "./rutasJuego.js";
import rutasJugador from "./rutasJugador.js";
import rutasPuntaje from "./rutasPuntaje.js";

const enrutador = Router();
enrutador.use("/jugadores", rutasJugador);
enrutador.use("/juegos", rutasJuego);
enrutador.use("/puntajes", rutasPuntaje);

export default enrutador;


