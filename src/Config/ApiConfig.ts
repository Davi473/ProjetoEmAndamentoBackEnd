import express, { Express, Request, Response } from "express";
import cors from "cors";

type Method = "get" | "post" | "put" | "delete" | "patch";

export default interface ApiConfig
{
    register (method: Method, url: string, callback: Function): Promise<void>
    listen (door: string | number): Promise<void>
}

export class ApiConfigExpress implements ApiConfig
{
    private api: Express;

    constructor () 
    {
      this.api = express();
      this.api.use(express.json());
      this.api.use(cors());
    }

    async register(method: Method, url: string, callback: Function): Promise<void> 
    {
      this.api[method](url, async (req: Request, res: Response) => callback(req, res)); 
    } 

    async listen(door: string | number): Promise<void> 
    {
      this.api.listen(door, () => {console.log(`Server Open ${door}`)});
    }
}