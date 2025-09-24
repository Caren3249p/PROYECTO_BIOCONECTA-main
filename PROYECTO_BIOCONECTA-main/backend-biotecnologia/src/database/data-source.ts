// src/database/data-source.ts
import { DataSource } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '', // cámbiala si tu MySQL usa otra
  database: 'bioconecta', // asegúrate que existe en MySQL
  entities: [Usuario],
  synchronize: true,
});

export default dataSource;
