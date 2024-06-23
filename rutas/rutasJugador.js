import { Router } from "express";
import JugadoresControlador from "../Controladores/JugadoresControlador.js";
const rutasJugadores = Router();

const jugadorControllers = new JugadoresControlador();

rutasJugadores.get("/",jugadorControllers.mostrarJugadores);
rutasJugadores.post("/",jugadorControllers.agregarJugador);
rutasJugadores.put('/:idJugador', jugadorControllers.cambiarNombre);
rutasJugadores.delete('/:idJugador', jugadorControllers.eliminarJugador);

export default rutasJugadores;
