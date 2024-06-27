import { Router } from "express";
import PuntajesControlador from "../Controladores/PuntajesControlador.js";
const rutasPuntajes = Router();
import { sesionVerificada } from "../middleware/sesionVerificada.js";


const puntajeControllers = new PuntajesControlador();

rutasPuntajes.use(sesionVerificada)
rutasPuntajes.post("/",puntajeControllers.actualizarPuntajeDeJugador);
rutasPuntajes.get("/",puntajeControllers.getPuntajesAltos);

export default rutasPuntajes;
