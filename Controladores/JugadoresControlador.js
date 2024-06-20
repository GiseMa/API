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
 
cambiarNombre = async (req, res)=> {
  try{
    const { id } = req.params;
    const jugadorActualizado = await Jugadores.update(req.body, { where: { id }});
    res.status(200).send({succes: true, message: jugadorActualizado})
  }catch(error){
    res.status(500).send({ success: false, message: error.message });
  }
}

eliminarJugador = async(req, res) =>{
  try{
    const { id } = req.params;
    await Jugadores.destroy({where: { id }});
    res.status(200).send({ success: true, message: `El jugador con id ${ id } fue eliminado`})
  }catch(error){
    res.status(500).send({ success: false, message: error.message});
  }
}

}

export default JugadoresControlador