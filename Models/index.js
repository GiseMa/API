import Puntajes from "./Puntajes.js";
import Jugadores from "./Jugadores.js";

/*Agregar foreign key a jugadores?*/
Jugadores.hasOne(Puntajes, {
    foreignKey: idJugador
});
Puntajes.hasOne(Jugadores, {
    foreignKey: idJugador
});

export {
    Jugadores, Puntajes
}