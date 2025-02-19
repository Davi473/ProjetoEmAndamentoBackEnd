import { CardDaoPostgres } from "./card-repository";

export default class CardService
{
  constructor(readonly repository: CardDaoPostgres) {}

  async get(id: string | null = null)
  {
    const months = await this.repository.find(id);
  }
}