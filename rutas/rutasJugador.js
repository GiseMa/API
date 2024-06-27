import { Router } from "express";
import JugadoresControlador from "../Controladores/JugadoresControlador.js";
import { sesionVerificada } from "../middleware/sesionVerificada.js";
const rutasJugadores = Router();

const jugadorControllers = new JugadoresControlador();


rutasJugadores.post("/",jugadorControllers.agregarJugador);
rutasJugadores.post("/login",jugadorControllers.login);

rutasJugadores.get("/me", sesionVerificada, jugadorControllers.me);
 rutasJugadores.use(sesionVerificada)
rutasJugadores.get("/",jugadorControllers.mostrarJugadores);
rutasJugadores.put('/:idJugador', jugadorControllers.cambiarDatos);
rutasJugadores.delete('/:idJugador', jugadorControllers.eliminarJugador);

export default rutasJugadores;
