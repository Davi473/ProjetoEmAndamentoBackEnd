import { CardPurchasesDaoPostgres } from "./card-purchases-repository";

export default class CardPurchasesService
{
  constructor(readonly repository: CardPurchasesDaoPostgres) {}

  async get(id: string | null = null)
  {
    const months = await this.repository.find(id);
  }
}