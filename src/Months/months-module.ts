import ApiConfig from "../Config/ApiConfig";
import Connection from "../Config/dbConfing";
import MonthsController from "./months-controller";
import { MonthsDaoPostgres } from "./months-repository";
import MonthsService from "./months-service";

export default class MonthsModulo
{
  constructor(
    readonly api: ApiConfig,
    readonly DBConnection: Connection
  ) {
    const repository = new MonthsDaoPostgres(DBConnection);
    const service = new MonthsService(repository);
    new MonthsController(api, service);
  }
}