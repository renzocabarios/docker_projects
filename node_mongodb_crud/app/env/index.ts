import dotenv from "dotenv";
dotenv.config();

export const API_PORT: number = Number(process.env.API_PORT) || 9000;
export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_PORT: number = Number(process.env.DB_PORT) || 27017;
export const DB_COLLECTION: string = process.env.DB_COLLECTION || "test";
export const HASH_SALT: number = Number(process.env.HASH_SALT) || 10;
export const JWT_KEY: string = process.env.JWT_KEY || "secret";
export const DB_CONNECTION: string = `mongodb://${DB_HOST}:${DB_PORT}/${DB_COLLECTION}?directConnection=true`;
