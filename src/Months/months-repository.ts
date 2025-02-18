import Connection from "../Config/dbConfing";

export default interface MonthsDao {
    find(id: string | null): Promise<any>;
    save(month: any): Promise<void>;
}

export class MonthsDaoPostgres implements MonthsDao
{
  constructor(readonly DBConnection: Connection) {}
  
  async find(id: string | null): Promise<any> 
  {
    return "oie"
  }

  async save(month: any): Promise<void> 
  {
    
  }
  
}