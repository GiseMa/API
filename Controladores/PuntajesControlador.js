/*crearJugador, agregarPuntajeAJugador, mostrarInfo-->mostrarTopTres*/ 
import {Jugadores, Puntajes} from "../Models/index.js";

class PuntajesControlador{
    constructor() {}

    crearJugador = async (req, res) => {
        try {
          const { idJugador, nombre } = req.body;
          const jugador = await Jugadores.create({
            idJugador,
            nombreJugador,
          });
          res.status(200).send({ success: true, message: jugador });
        } catch (error) {
          res.status(500).send({ success: false, message: error.message });
        }
    };

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