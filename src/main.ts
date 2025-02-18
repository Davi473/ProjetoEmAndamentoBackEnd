import ApiConfig, { ApiConfigExpress } from "./Config/ApiConfig";
import PostgresConnection from "./Config/postgres";
import "dotenv/config";
import MonthsModulo from "./Months/months-module";

const API: ApiConfig = new ApiConfigExpress();
const DOOR = process.env.PORT_SERVER
if (!DOOR) throw new Error("Servidor sem porta");
const entradaPostgres = process.env.CONFIG_POSTGRES;
if (!entradaPostgres) throw new Error("Sem dados do banco");
const DBConnection = new PostgresConnection(entradaPostgres);

new MonthsModulo(API, DBConnection);

API.listen(DOOR)
