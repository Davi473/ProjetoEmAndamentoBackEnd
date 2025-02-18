import pgPromise from "pg-promise";

const pgp = pgPromise();

interface DBConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

export default abstract class Connection {
  protected config: string | DBConfig;

  constructor(config: string | DBConfig) {
    this.config = config;
  }

  abstract connect(): Promise<void>;
  abstract query(statement: string, params?: any[]): Promise<any>;
  abstract close(): Promise<void>;
}