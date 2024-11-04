import "reflect-metadata";
import { DataSource } from "typeorm";
import { BaseModel } from "./entity/BaseModel"; // Substitua com o caminho correto das suas entidades

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",     // Substitua pelo seu usuário do PostgreSQL
  password: "postgres",     // Substitua pela sua senha do PostgreSQL
  database: "node_serveless",      // Substitua pelo nome do seu banco de dados
  entities: [BaseModel],    // Substitua pelas suas entidades
  synchronize: true,        // Sincronize o banco automaticamente em dev (use migrações em produção)
  logging: true,            // Exibe logs no console (opcional)
});
