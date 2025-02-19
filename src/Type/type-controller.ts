import ApiConfig from "../Config/ApiConfig";
import {Request, Response} from "express";
import TypeService from "./type-service";

export default class TypeController
{
  constructor (
    readonly api: ApiConfig,
    readonly service: TypeService
  ) {
    api.register("get", "/months", async (req: Request, res: Response) =>
    {
      try {
        const response = await service.get();
        res.json(response);
      } catch (err: any) {
        res.json({message: `Get months: ${err.message}`})
      }
    });
  }
}