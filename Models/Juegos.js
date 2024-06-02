import { DataTypes, Model } from "sequelize";

import conexion from "../conexion/conexion.js";

class Juegos extends Model{}

Juegos.init (
{
    idJuego:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    nombreJuego:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    sequelize:conexion,
    modelName:"Juegos",
}
);
export default Juegos;