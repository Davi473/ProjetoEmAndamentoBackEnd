import ApiConfig from "../Config/ApiConfig";
import MonthsController from "./months-controller";
import MonthsService from "./months-service";

export default class MonthsModulo
{
  constructor(readonly api: ApiConfig) 
  {
    const service = new MonthsService();
    new MonthsController(api, service);
  }
}