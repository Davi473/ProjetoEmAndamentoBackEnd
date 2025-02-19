import ApiConfig from "../Config/ApiConfig";
import Connection from "../Config/dbConfing";
import TypeController from "./type-controller";
import { TypeDaoPostgres } from "./type-repository";
import TypeService from "./type-service";



export default class TypeModulo
{
  constructor(
    readonly api: ApiConfig,
    readonly DBConnection: Connection
  ) {
    const repository = new TypeDaoPostgres(DBConnection);
    const service = new TypeService(repository);
    new TypeController(api, service);
  }
}