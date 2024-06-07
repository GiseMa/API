import { Router } from "express";
import rutasJuego from "./rutasJuego.js";
import rutasJugador from "./rutasJugador.js";
import rutasJugadorJuego from "./rutasJugadorJuego.js";

const enrutador = Router();
enrutador.use("/jugadores", rutasJugador);
enrutador.use("/juegos", rutasJuego);
enrutador.use("/jugadorJuego", rutasJugadorJuego);

export default enrutador;


