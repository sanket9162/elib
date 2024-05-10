import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.Port,
  databaseURL: process.env.MONGO_CONNECTION_SRING,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWS_SECRET,
};

export const config = Object.freeze(_config);
