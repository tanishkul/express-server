import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();

const Configuration: IConfig = Object.freeze({
  key: process.env.KEY,
  mongoUri: process.env.MONGO_URL,
  port: process.env.PORT,
});

export default Configuration;
