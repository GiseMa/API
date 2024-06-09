import { Router } from "express";
import JugadoresControlador from "../Controllers/JugadoresControlador.js";
const rutasJugadores = Router();

const jugadorControllers = new JugadoresControlador();

rutasJugadores.get("/",jugadorControllers.mostrarJugador);
rutasJugadores.get("/:id",jugadorControllers.mostrarJugadorPorId);
rutasJugadores.post("/", jugadorControllers.crearJugador);
rutasJugadores.post("/login", jugadorControllers.login);
rutasJugadores.put("/:id", jugadorControllers.updateJugador);
rutasJugadores.delete("/:id", jugadorControllers.deleteJugador);

export default rutasJugadores;
