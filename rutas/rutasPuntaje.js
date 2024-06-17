import { Router } from "express";
import PuntajesControlador from "../Controladores/PuntajesControlador.js";
const rutasPuntajes = Router();

const puntajeControllers = new PuntajesControlador();

rutasPuntajes.post("/:id",puntajeControllers.agregarPuntajeAJugador);

export default rutasPuntajes;
