import { Router } from "express";
import JugadoresControlador from "../Controladores/JugadoresControlador.js";
const rutasJugadores = Router();

const jugadorControllers = new JugadoresControlador();

rutasJugadores.get("/",jugadorControllers.mostrarJugadores);

export default rutasJugadores;
