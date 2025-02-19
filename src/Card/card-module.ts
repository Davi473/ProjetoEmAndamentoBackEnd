import ApiConfig from "../Config/ApiConfig";
import Connection from "../Config/dbConfing";
import CardController from "./card-controller";
import { CardDaoPostgres } from "./card-repository";
import CardService from "./card-service";

export default class CardModulo
{
  constructor(
    readonly api: ApiConfig,
    readonly DBConnection: Connection
  ) {
    const repository = new CardDaoPostgres(DBConnection);
    const service = new CardService(repository);
    new CardController(api, service);
  }
}