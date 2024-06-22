import { DataTypes, Model } from "sequelize";

import conexion from "../conexion/conexion.js";

class Jugadores extends Model { }

Jugadores.init({
    idJugador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombreJugador: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: conexion,
    modelName: "Jugadores",
});

export default Jugadores;

