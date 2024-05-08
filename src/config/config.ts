import {config as conf} from 'dotenv'
conf()

const _config = {
    port: process.env.Port,
    databaseURL: process.env.MONGO_CONNECTION_SRING,
    env: process.env.NODE_ENV
}

export const config = Object.freeze(_config)