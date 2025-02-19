import ApiConfig from "../Config/ApiConfig";
import {Request, Response} from "express";
import CardService from "./card-service";

export default class CardController
{
  constructor (
    readonly api: ApiConfig,
    readonly service: CardService
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