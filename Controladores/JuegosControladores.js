/*crearJugador, agregarPuntajeAJugador, mostrarInfo-->mostrarTopTres*/ 
import {Juegos} from "../Models/index.js";

class JuegosControlador {
  constructor() {}
mostrarInfo = async (req, res) => {
    try {
      const data = await Juegos.findAll();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };

}
