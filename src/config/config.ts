import {config as conf} from 'dotenv'
conf()

const _config = {
    port: process.env.Port,
}

export const config = Object.freeze(_config)