import {Jugadores} from "../Models/index.js";

class JugadoresControlador {
  constructor() {}
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

 
}
export default JugadoresControlador