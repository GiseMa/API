import { Router } from "express";
import JugPunControlador from "../Controladores/JugPunControlador.js";
const rutasJunPug = Router();

const junPugControlador = new JugPunControlador();

rutasJunPug.post("/",junPugControlador.crearJugadorConPuntaje);

export default rutasJunPug;
