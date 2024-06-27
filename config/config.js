const PORT = process.env.PORT || 8000;
const DB_NAME = process.env.DB_NAME || "proyectotp2";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DIALECT = process.env.DB_DIALECT || "mysql";
const DB_PORT = process.env.DB_PORT || 3306;
const SECRET = process.env.SECRET || "llave_secreta";

export { PORT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT, SECRET};