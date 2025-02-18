import ApiConfig from "../Config/ApiConfig";
import MonthsService from "./months-service";
import {Request, Response} from "express";

export default class MonthsController
{
  constructor (
    readonly api: ApiConfig,
    readonly service: MonthsService
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