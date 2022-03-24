import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import indexRoutes from './routes/index.routes'

require('dotenv').config()
const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(process.env.PORT || 4000, () => {
    console.log('running in port', process.env.PORT || 4000);
})