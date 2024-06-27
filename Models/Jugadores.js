import { DataTypes, Model } from "sequelize";
import conexion from "../conexion/conexion.js";
import bcrypt from "bcrypt";


class Jugadores extends Model {
//Es un metodo de instancia.
    async validacionContrasenia(contrasenia){
        //En el compare se compara la contraseña que entra por parametro y la ya hasheada
        const validacion = await bcrypt.compare(contrasenia, this.contrasenia);
        return validacion;

    }

 }

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
        unique: true,
        validate: {
            isAlphanumeric: true,
        }
    },
    salt:{
        type: DataTypes.STRING,
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}, {
    sequelize: conexion,
    modelName: "Jugadores",
});

Jugadores.beforeCreate(async (jugador) => {
    const salt = await bcrypt.genSalt();
    jugador.salt = salt;
    const passwordHash = await bcrypt.hash(jugador.contrasenia, salt);
    jugador.contrasenia = passwordHash; 

  });


export default Jugadores;

