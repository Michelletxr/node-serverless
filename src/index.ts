import express, { Request, Response, Application } from 'express';
import {AppDataSource } from './database/data-source';
import { BaseModel } from './entity/BaseModel';

const app: Application = express(); // Tipagem explícita de app como Application
app.use(express.json()); // Middleware para processar JSON no corpo da requisição

// Inicialização do DataSource e configuração das rotas
AppDataSource.initialize().then(() => {
    console.log("Conectado ao banco de dados");

    const baseRepository = AppDataSource.getRepository(BaseModel);

    app.get("/api", async (req: any, res: { json: (arg0: BaseModel[]) => void; }) => {
        try {
            const data = await baseRepository.find();
            console.log("data", data)
            return res.json(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
           // return res.json({ "Erro ao buscar dados" });
        }
    });

   
   

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}).catch(error => console.log(error));
