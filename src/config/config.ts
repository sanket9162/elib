import { config as conf } from "dotenv";
conf();

const _config = {
  port: process.env.Port,
  databaseURL: process.env.MONGO_CONNECTION_SRING,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWS_SECRET,
  cloudinaryCloud: process.env.CLOUDINARY_CLOUD,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinarySecret: process.env.CLOUDINARY_API_SECRET,
  frontendDomain: process.env.FRONTEND_DOMAIN,
};

export const config = Object.freeze(_config);
