import { Jugadores } from "../Models/index.js";

const jugoresSeed = async() =>
await Jugadores.bulkCreate([ 
    {idJugador: "1", nombreJugador: "Juli" },
    { idJugador: "2", nombreJugador: "Gise" },
    { idJugador: "3", nombreJugador: "Fran" },
]);

export default jugoresSeed;