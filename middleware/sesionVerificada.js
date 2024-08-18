 import { decodificador } from "../utils/token.js";

export const sesionVerificada = async (req, res, next) =>{
    try {
        const { token } = req.cookies;
        console.log(token)
        if (!token) throw new Error("¡Tenes que loguearte!");
        const { idJugador, nombreJugador } = decodificador(token);
        req.jugador = { idJugador, nombreJugador };
        next()
      } catch (error) {
         res.status(500).send({ success: false, message: error.message });
      }
} 