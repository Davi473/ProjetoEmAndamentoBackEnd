import ApiConfig from "../Config/ApiConfig";
import {Request, Response} from "express";
import CardPurchasesService from "./card-purchases-service";

export default class CardPurchasesController
{
  constructor (
    readonly api: ApiConfig,
    readonly service: CardPurchasesService
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