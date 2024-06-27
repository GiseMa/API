import express from "express"
import enrutador from "./rutas/enrutador.js";
import conexion from "./conexion/conexion.js";
import {PORT} from "./config/config.js"
import seed from "./seed/seed.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser()) 
 app.use("/api", enrutador);

await conexion.sync({force: false});
await seed()


app.listen(PORT, () => {
    console.log("server Ok");
});