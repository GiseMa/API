import { Jugadores, Puntajes } from "../Models/index.js";

class JugPunControlador {
  constructor() {}

  // ... (existing methods)

  crearJugadorConPuntaje = async (req, res) => {
    try {
      const { nombreJugador, idJugador, puntaje} = req.body;

      // Create a transaction to ensure data consistency
      const transaction = await Jugadores.sequelize.transaction();

      try {
        // Create a new player record in the 'Jugadores' table
        const nuevoJugador = await Jugadores.create({
          idJugador,
          nombreJugador
        }, { transaction });

        // Create a new score record in the 'Puntajes' table with the player ID
        await Puntajes.create({
          idJugador,
          puntaje
        }, { transaction });

        // Commit the transaction if all operations succeed
        await transaction.commit();

        res.status(201).send({
          success: true,
          message: "Jugador y puntaje creados exitosamente",
          data: {
            idJugador,
            nombreJugador,
            puntaje
          },
        });
      } catch (error) {
        // Rollback the transaction if any error occurs
        await transaction.rollback();
        throw error;
      }
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
}

export default JugPunControlador;