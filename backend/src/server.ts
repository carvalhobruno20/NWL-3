import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//acessar as imagens
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto
//Recurso = usuario

//Metodos HTTP = GET, POST, PUT, DELETE
//GET = Buscar uma informação(Lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Parametros
//Query Params = https://localhost:3333/users?search=bruno
//Route Params = https://localhost:3333/users/1 (identificar um recurso)
//Body = https://localhost:3333/users

//localhost:3333
app.listen(3333);