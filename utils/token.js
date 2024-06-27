import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const generadorDeToken = (payload) =>{
    const token = jwt.sign(payload, SECRET)

    return token;
}

export const decodificador = (token) => {
    const decodificado = jwt.verify(token, SECRET);
    return decodificado;
  };