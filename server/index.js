import express from "express";
import bodyparser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from "cors";
//swaggerapi
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from "./swagger.js";
//routes
import adminRouter from "./routes/admin.route.js";
import apiRouter from "./routes/api.route.js";
import questionRouter from "./routes/question.route.js";
import categoryRouter from "./routes/category.route.js";
import levelsRouter from "./routes/levels.route.js";
import quiztestRouter from "./routes/quiztest.route.js";
import usersRouter from "./routes/users.route.js";


const app=express();
const PORT=5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(compression());
app.use('/uploads', express.static('uploads'));
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001','http://192.168.0.20:3000'],
    credentials: true
}));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/admin',adminRouter);
app.use('/api',apiRouter);
app.use('/question',questionRouter);
app.use('/category',categoryRouter);
app.use('/levels',levelsRouter);
app.use('/quiztest',quiztestRouter);
app.use('/users',usersRouter);
app.listen(PORT,()=>console.log(`Server listening on ${PORT}`));
