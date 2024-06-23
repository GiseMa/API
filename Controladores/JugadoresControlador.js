import { Jugadores, Puntajes } from "../Models/index.js";

class JugadoresControlador {
  constructor() { }
  /*guardarPuntaje, mostrarDatos*/

  mostrarJugadores = async (req, res) => {
    try {
      const data = await Jugadores.findAll();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }

  //agregarJugador
  agregarJugador = async (req, res) => {
    try {
      const { nombreJugador, contrasenia } = req.body;
      const nuevoJugador = await Jugadores.create({ nombreJugador, contrasenia });

      await Puntajes.create({
        idJugador: nuevoJugador.idJugador,
        puntaje: 0,
      });

      res.status(201).send({ success: true, message: "Jugador y puntaje creados exitosamente" });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }

  cambiarNombre = async (req, res) => {
    try {
      const { idJugador } = req.params;
      const jugadorActualizado = await Jugadores.update(req.body, { where: { idJugador } });
      res.status(200).send({ succes: true, message: jugadorActualizado })
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }

  eliminarJugador = async (req, res) => {
    try {
      const { id } = req.params;
      await Jugadores.destroy({ where: { id } });
      res.status(200).send({ success: true, message: `El jugador con id ${id} fue eliminado` })
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }

}


export default JugadoresControlador