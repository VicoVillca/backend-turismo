import { SequelizeOptions } from 'sequelize-typescript';

const databaseConfig: SequelizeOptions = {
  dialect: 'postgres',
  host: 'localhost', // Cambia esto por la dirección de tu servidor MySQL
  port: 5432, // Cambia esto por el puerto de tu servidor MySQL
  username: 'root', // Cambia esto por el nombre de usuario de tu base de datos
  password: 'password', // Cambia esto por la contraseña de tu base de datos
  database: 'mydatabase', // Cambia esto por el nombre de tu base de datos
  define: {
    timestamps: true, // Si deseas incluir campos createdAt y updatedAt en tus tablas
    underscored: true, // Si deseas utilizar el estilo de nombres de columna con guiones bajos en lugar de camelCase
  },
  models: [__dirname + '/../**/*.entity.ts'], // Ruta a tus archivos de modelos de Sequelize
  logging: true, // Si deseas mostrar las consultas SQL generadas por Sequelize en la consola
};

export default databaseConfig;