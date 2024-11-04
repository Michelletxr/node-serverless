import { EntityRepository, Repository } from "typeorm";
import { BaseModel } from "../entity/BaseModel";

@EntityRepository(BaseModel)
export class BaseRepository extends Repository<BaseModel> {
  async findByName(name: string): Promise<BaseModel | null> {
    return this.findOne({ where: { name } });
  }

  async createModel(name: string): Promise<BaseModel> {
    const model = this.create({ name });
    return this.save(model);
  }
}
