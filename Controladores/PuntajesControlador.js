/*crearJugador, agregarPuntajeAJugador, mostrarInfo-->mostrarTopTres*/ 
import {Jugadores, Puntajes} from "../Models/index.js";
import conexion from "../conexion/conexion.js";

class PuntajesControlador{
    constructor() {}

    actualizarPuntajeDeJugador = async (req, res) => {
      try {
        const { idJugador, puntaje } = req.body;
        const existingPuntaje = await Puntajes.findOne({ where: { idJugador } });
    
        if (!existingPuntaje) {
         
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
        const topTres = await Puntajes.findAll({
          order: [['puntaje', 'DESC']],
          limit: 3,
          include: [{
            model: Jugadores,
            as: 'jugador',
            attributes: ['idJugador', 'nombreJugador']  
          }]
        });
    
        res.status(200).send({ success: true, data: topTres });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
    };
    
}

export default PuntajesControlador;