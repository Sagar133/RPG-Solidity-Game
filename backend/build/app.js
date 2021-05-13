"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const v1_1 = __importDefault(require("./routes/v1"));
const morgan_1 = __importDefault(require("morgan"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
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
const app = express_1.default();
app.set('view engine', 'ejs');
app.use(express_1.default.json({ limit: "10mb" }));
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
}));
app.use(cors_1.default({ origin: config_1.corsUrl, optionsSuccessStatus: 200 }));
app.use(express_fileupload_1.default());
app.get('/', async (req, res) => {
    return res.send("Dungeon Crawler backend v1.0");
});
app.get('/form', (req, res) => {
    res.render('form');
});
// Routes
app.use("/v1", v1_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const route = res.req.originalUrl;
    throw new Error(`No such route: ${route}`);
});
// Middleware Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).send(err.message);
});
exports.default = app;
//# sourceMappingURL=app.js.map