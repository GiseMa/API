import { Router } from "express";
import JugadoresControlador from "../Controladores/JugadoresControlador.js";
const rutasJugadores = Router();

const jugadorControllers = new JugadoresControlador();

rutasJugadores.get("/",jugadorControllers.mostrarJugadores);
rutasJugadores.post("/",jugadorControllers.agregarJugador);
rutasJugadores.put('/:id', jugadorControllers.cambiarNombre);
rutasJugadores.delete('/:id', jugadorControllers.eliminarJugador);

export default rutasJugadores;
