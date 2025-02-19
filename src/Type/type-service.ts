import { TypeDaoPostgres } from "./type-repository";

export default class TypeService
{
  constructor(readonly repository: TypeDaoPostgres) {}

  async get(id: string | null = null)
  {
    const months = await this.repository.find(id);
  }
}