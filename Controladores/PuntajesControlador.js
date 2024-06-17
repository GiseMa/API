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

    //a chequear???
    mostrarTopTres = async (req, res) => {
        try {
          const topTres = await Puntajes.findAll({
            attributes: ["idJugador", [sequelize.fn('max', sequelize.col('puntaje')), 'max_puntaje']],
            group: ["idJugador"],
            order: [[sequelize.fn('max', sequelize.col('puntaje')), 'DESC']],
            limit: 3,
            include: [
              {
                model: Jugadores,
                attributes: ["nombre"],
              },
            ],
          });
          res.status(200).send({ success: true, message: topTres });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
    };

}

export default PuntajesControlador;