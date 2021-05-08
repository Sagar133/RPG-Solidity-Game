import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { corsUrl, environment } from "./config";
import routesV1 from './routes/v1'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'

process.on("uncaughtException", (e) => {
  console.error(e);
});

process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
process.on('SIGINT', function () {
// this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});

const app = express();

app.set('view engine','ejs');
app.use(express.json({ limit: "10mb" }));
app.use(morgan('dev'))
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));
app.use(fileUpload());

app.get('/',async (req,res)=>{
	return res.send("Dungeon Crawler backend v1.0")
})

app.get('/form',(req,res)=>{
    res.render('form');
})
// Routes
app.use("/v1", routesV1);

// catch 404 and forward to error handler
app.use((req:Request, res:Response, next:NextFunction) => {
    const route = res.req.originalUrl;
    throw new Error(`No such route: ${route}`);
});

// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err);
      return res.status(500).send(err.message);
});

export default app;