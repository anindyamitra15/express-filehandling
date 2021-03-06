import dotenv from "dotenv";



export let isProduction = false;

if (!process.env.NODE_ENV) dotenv.config();
else {
  if (String(process.env.NODE_ENV) === "production") {
    dotenv.config({ path: `.env.production` });
    production = true;
  } else {
    require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
  }
}

const PORT = Number(process.env.PORT || 3030);

const config = {
  PORT,
  isProduction
};
export default config;
