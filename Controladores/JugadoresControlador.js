import { Jugadores, Puntajes } from "../Models/index.js";
import { generadorDeToken, decodificador } from "../utils/token.js";

class JugadoresControlador {
  constructor() { }

  mostrarJugadores = async (req, res) => {
    try {
      const jugadores = await Jugadores.findAll({ attributes: ['idJugador', 'nombreJugador'] });
      const jugadoresConPuntaje = [];

      for (const jugador of jugadores) {
        const puntaje = await Puntajes.findOne({ 
          where: { idJugador: jugador.idJugador },
          attributes: ['puntaje']
        });

        jugadoresConPuntaje.push({
          idJugador: jugador.idJugador,
          nombreJugador: jugador.nombreJugador,
          puntaje: puntaje.puntaje
        });
      }

      res.status(200).send({ success: true, data: jugadoresConPuntaje });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }

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
      res.status(500).send({ success: false, message: "El nombre de jugador ya existe" });
    }
  }

  cambiarDatos = async (req, res) => {
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
      const { idJugador } = req.params;
      await Jugadores.destroy({ where: { idJugador } });
      res.status(200).send({ success: true, message: `El jugador con id ${idJugador} fue eliminado` })
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  }

  login = async (req, res) => {
    try {
      const { nombreJugador, contrasenia } = req.body;
      const data = await Jugadores.findOne({ 
        where: {
          nombreJugador,
        },
      });

      const  datosIncorrectos = "Los datos de ingreso son incorrectos";
      if (!data) throw new Error(datosIncorrectos);

      const validacion = await data.validacionContrasenia(contrasenia)
      if (!validacion) throw new Error(datosIncorrectos);


    const payload = {
        id: data.idJugador,
        nombre: data.nombreJugador,
      }
      const token = generadorDeToken(payload)

      res.cookie("token", token) 

      res.status(200).send({succes: true, message:"¡Bienvenido!"})
    }catch(error){
      res.status(500).send({succes: false, message: error.message})
    }

};

me = async (req, res) => {
  try {
    const { jugador } = req;
    if (!jugador) throw new Error("¡Tenes que loguearte!");
    res.status(200).send({ success: true, message: jugador});
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};  
}


export default JugadoresControlador;