import { MonthsDaoPostgres } from "./months-repository";

export default class MonthsService
{
  constructor(readonly repository: MonthsDaoPostgres) {}

  async get(id: string | null = null)
  {
    const months = await this.repository.find(id);
  }
}