import Connection from "../Config/dbConfing";

export default interface CardPurchasesDao {
    find(id: string | null): Promise<any>;
    save(month: any): Promise<void>;
}

export class CardPurchasesDaoPostgres implements CardPurchasesDao
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