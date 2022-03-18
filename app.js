import express from "express";
import { PORT, production } from "./config/env.config.js"; //
import chalk from "chalk";
import cors from "cors";
import MainRouter from "./src/routes/main.route.js";

//  Globals
const app = express();

/*======================All the call-backs========================*/
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "1mb", urlencoded: false, extended: true })
);
app.use(cors());
app.use('/', MainRouter);

app.listen(PORT, () => {
  if (!production)
    return console.log(
      chalk.blue(`Server running on http://localhost:${PORT}`)
    );

  console.log(chalk.green(`Server is running`));
});
