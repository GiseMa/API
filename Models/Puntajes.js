import { DataTypes, Model } from "sequelize";

import conexion from "../conexion/conexion.js";

class Puntajes extends Model{}

Puntajes.init (
{
    puntaje:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    idJugador:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    idJuego:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},
{
    sequelize:conexion,
    modelName:"Puntajes",
}
);
export default Puntajes;