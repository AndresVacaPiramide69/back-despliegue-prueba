import express from 'express';
import cors from 'cors'
import { routerOperacion } from './suma';

const port = 3000;
const allowedOrigins = ['*'];
const options : cors.CorsOptions = {
    origin:allowedOrigins
}
const app = express();

app.use(express.json());
app.use(cors({origin:'*'}))

const api = '/api/';

app.use(`${api}operaciones`, routerOperacion)
app.listen(port, () => {
    console.log('Application started on port ' + port)
});