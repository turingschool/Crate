//sets up the environment, stores port info here instead of hard coding it

// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 8000
