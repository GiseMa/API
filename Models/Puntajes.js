import { DataTypes, Model } from "sequelize";

import conexion from "../conexion/conexion.js";

class Puntajes extends Model{}

Puntajes.init({
    idJugador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Jugadores',
            key: 'idJugador',
        },
        allowNull: false,
    },
    puntaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: conexion,
    modelName: "Puntajes",
});
export default Puntajes;