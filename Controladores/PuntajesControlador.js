/*crearJugador, agregarPuntajeAJugador, mostrarInfo-->mostrarTopTres*/ 
import {Jugadores, Puntajes} from "../Models/index.js";

class PuntajesControlador{
    constructor() {}

    agregarPuntajeAJugador = async (req, res) => {
        try {
          const { idJugador, puntaje } = req.body;
          const nuevoPuntaje = await Puntajes.create({
            idJugador,
            puntaje,
          });
          res.status(200).send({ success: true, message: nuevoPuntaje });
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