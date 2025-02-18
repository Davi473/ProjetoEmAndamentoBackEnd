export default class MonthsService
{
  constructor(readonly repository: any) {}

  async get(id: string | null = null)
  {
    let months;
    if (id)  months = await this.repository.get(id);
    if (!id) months = await this.repository.get();
  }
}