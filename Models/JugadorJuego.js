import { DataTypes, Model } from "sequelize";

import conexion from "../conexion/conexion.js";

class JugadorJuego extends Model{}

JugadorJuego.init (
{
    idJugador:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    idJuego:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    puntaje: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},
{
    sequelize:conexion,
    modelName:"JugadorJuego",
}
);
export default JugadorJuego;

