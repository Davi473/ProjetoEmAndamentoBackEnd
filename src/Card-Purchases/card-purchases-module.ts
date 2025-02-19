import ApiConfig from "../Config/ApiConfig";
import Connection from "../Config/dbConfing";
import CardPurchasesController from "./card-purchases-controller";
import { CardPurchasesDaoPostgres } from "./card-purchases-repository";
import CardPurchasesService from "./card-purchases-service";


export default class CardModulo
{
  constructor(
    readonly api: ApiConfig,
    readonly DBConnection: Connection
  ) {
    const repository = new CardPurchasesDaoPostgres(DBConnection);
    const service = new CardPurchasesService(repository);
    new CardPurchasesController(api, service);
  }
}