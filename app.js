import cors from "cors";
import path from "path";
import chalk from "chalk";
import express from "express";
import fileUpload from "express-fileupload";
import MainRouter from "./src/routes/main.route.js";
import config from "./config/env.config.js";
import FileHandleRouter from "./src/routes/filehandle.route.js";

//  Globals
const app = express();
const __dirname = path.resolve();

/*============ All the call-backs and configurations for app ==============*/
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  express.urlencoded({
    limit: "1mb",
    urlencoded: false,
    extended: true,
  })
);
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views")); //set path for the views
app.use(express.static(__dirname + "/src/views/assets"));

//Routes
app.use("/", MainRouter);
app.use("/file", FileHandleRouter);

app.listen(config.PORT, () => {
  if (!config.isProduction)
    return console.log(
      chalk.blue(`Server running on http://localhost:${config.PORT}`)
    );

  console.log(chalk.green(`Server is running, check '/' route`));
});
