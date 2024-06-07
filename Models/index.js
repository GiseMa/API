import Juegos from "./Juegos.js";
import Jugadores from "./Jugadores.js";
import JugadorJuego from "./JugadorJuego.js";

/*Singular o plural? */
/* Como establecer las relaciones many to many entre juegos y jugadores y la de puntaje*/

Jugadores.belongsToMany(Juegos, {
    through: 'JugadoresJuego'
})
Juegos.belongsToMany(Jugadores, {
    through: 'JugadoresJuego'
})

export {
    Juegos, Jugadores, JugadorJuego
}