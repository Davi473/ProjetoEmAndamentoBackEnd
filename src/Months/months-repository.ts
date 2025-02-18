
export default interface MonthsDao {
    find(id: string | null): Promise<any>;
    save(month: any): Promise<void>;
}

export class MonthsDaoPostgres implements MonthsDao
{
  async find(id: string | null): Promise<any> 
  {
    return "oie"
  }

  async save(month: any): Promise<void> 
  {
    
  }
  
}