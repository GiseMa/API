# TP2_Proyecto_API_Juego
# Visualizador de puntajes por jugador

En este proyecto cargamos informacion sobre jugadores y sus puntajes obtenidos en un videojuego utilizando Node.js, Express, Sequelize y MySQL. Permite gestionar información de jugadores y puntajes, así como realizar consultas y actualizaciones a la base de datos.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Consultas sobre jugador](#consultas-sobre-jugador)
- [Consultas sobre puntajes](#consultas-sobre-puntajes)


## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clonar el repositorio


2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Instalar MySQL (WAMP o XAMPP) 

## Configuración

1. Crear un archivo `.env` con las variables de entorno :
    ```env
    PORT=8000
    DB_NAME="proyectotp2" 
    DB_USER=""
    DB_PASSWORD="root"
    DB_HOST="localhost",
    DB_DIALECT="mysql",
    DB_PORT=3306,
    ```

2. Establecer la conexión a la base de datos en `conexion/conexion.js`:
    ```javascript
    import { Sequelize } from 'sequelize';
    import {
      DB_NAME,
      DB_USER,
      DB_PASSWORD,
      DB_HOST,
      DB_DIALECT,
      DB_PORT,
    } from '../config/config.js';

    const conexion = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
  });

    try {
    await conexion.authenticate();
    console.log('Connection has been established successfully.');
    console.log('conexion a la BD hecha todo OKK');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  export default conexion;
    ```

## Uso

1. Para levantar el servidor, utilizar el comando:
    ```bash
    npm run dev
    ```
Si se hizo correctamente, muestra el mensaje "server Ok"


### Consultas sobre Jugador

- **GET `/api/jugadores`**: Obtiene todos los jugadores.Llama al método mostrarJugadores del controlador JugadoresControlador para obtener y devolver una lista de todos los jugadores.
- **POST `/api/jugadores`**: Agrega un nuevo jugador.Agrega un nuevo jugador. Llama al método agregarJugador del controlador JugadoresControlador para agregar un nuevo jugador a la base de datos.
- **PUT `/api/jugadores/:idJugador`**: Actualiza el nombre de un jugador por ID. Llama al método cambiarNombre del controlador JugadoresControlador para actualizar el nombre de un jugador específico identificado por idJugador.
- **DELETE `/api/jugadores/:idJugador`**: Elimina un jugador por ID.Llama al método eliminarJugador del controlador JugadoresControlador para eliminar un jugador específico identificado por idJugador.

### Consultas sobre Puntaje

- **POST `/api/puntajes`**: Actualiza el puntaje de un jugador.Llama al método actualizarPuntajeDeJugador del controlador PuntajesControlador para actualizar el puntaje de un jugador específico. En el body de la solicitud,hay que agregar el id del jugador y el puntaje nuevo:

[
  {
    "idJugador": 1,
    "puntaje": 100
  },
 
]

- **Respuesta**:

[
  {
  "success": true,
   "message": "Puntaje actualizado"
  }
]

- **GET `/api/puntajes`**: Obtiene los puntajes más altos.Llama al método getPuntajesAltos del controlador PuntajesControlador para obtener una lista de los puntajes más altos.

- **Respuesta**:
    ```
    [
      {
        "idJugador": 1,
        "puntaje": 200
      },
      {
        "idJugador": 2,
        "puntaje": 180
      },

    ]
