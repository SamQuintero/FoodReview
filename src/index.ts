import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import { engine } from 'express-handlebars';
import path from 'path';
import indexRouter from './routes/index.routes';


const app = express();


app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', '.hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));


app.use(indexRouter);

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});