import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/homePage";

const app = express();

// config body paster
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

// init routes
initWebRoutes(app);

app.listen(8000, () => {
  console.log("sever run on success");
});
