import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const STRCNX = process.env.STRCNX || 'mongodb://localhost'

export default {
    PORT,
    STRCNX
}