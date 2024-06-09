import Puntajes from "./Puntajes.js";
import Jugadores from "./Jugadores.js";

/*Agregar foreign key a jugadores?*/
Jugadores.hasOne(Puntajes, {
    foreignKey: "jugadorId",
  });
Puntajes.hasOne(Jugadores);

export {
    Jugadores, Puntajes
}