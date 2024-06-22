/*crearJugador, agregarPuntajeAJugador, mostrarInfo-->mostrarTopTres*/ 
import {Jugadores, Puntajes} from "../Models/index.js";

class PuntajesControlador{
    constructor() {}

    actualizarPuntajeDeJugador = async (req, res) => {
      try {
        const { idJugador, puntaje } = req.body;
        const existingPuntaje = await Puntajes.findOne({ where: { idJugador } });
    
        if (!existingPuntaje) {
          // Handle the case where no record exists for the given idJugador
          res.status(404).send({ success: false, message: "Jugador no encontrado" });
          return;
        }
    
        await existingPuntaje.update({ puntaje });
        res.status(200).send({ success: true, message: "Puntaje actualizado" });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
    };


}

export default PuntajesControlador;