import Puntajes from "./Puntajes.js";
import Jugadores from "./Jugadores.js";


Jugadores.hasOne(Puntajes, {
  foreignKey: "idJugador",
  as: "puntaje",
});
Puntajes.belongsTo(Jugadores, {
  foreignKey: "idJugador",
  as: "jugador",
});

export {
  Jugadores, Puntajes
};