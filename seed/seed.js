import { Jugadores, Puntajes } from "../Models/index.js"; 
import conexion from "../conexion/conexion.js";

const seed = async () => {
    try {
        await conexion.sync({ force: true }); 
        await Jugadores.bulkCreate([
            { nombreJugador: "Juli", contrasenia: "123" },
            { nombreJugador: "Gise" , contrasenia: "123"},
            { nombreJugador: "Fran" , contrasenia: "123"},
        ],
    {
        //Con el bulkCreate no se emiten los hooks indiduales. Esto lo que hace
        //es garantizar que c/registro pase por el hook
        individualHooks: true,
    });
        await Puntajes.bulkCreate([
            { idJugador: "1" },
            { idJugador: "2" },
            { idJugador: "3" },
        ]);
        console.log("Datos de jugadores insertados correctamente.");
    } catch (error) {
        console.error("Error al insertar datos de jugadores:", error);
    } 
};

export default seed;