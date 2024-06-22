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

     getPuntajesAltos = async (req, res) => {
      try {
        const { limit } = req.params;
        const query = `SELECT idJugador, puntaje FROM puntajes ORDER BY puntaje DESC LIMIT ?`;
        const [results] = await connection.query(query, [parseInt(limit, 10)]);
        res.status(200).send(results);
      } catch (err) {
        console.error('Error obteniendo los puntajes mas altos:', err);
        res.status(500).send({ success: false, message: err.message });
      }
    };
    
}

export default PuntajesControlador;