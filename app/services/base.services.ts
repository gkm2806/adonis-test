import { BaseModel } from '@ioc:Adonis/Lucid/Orm'

export class ModelService {
  private Model: typeof BaseModel

  constructor(model: any) {
    this.Model = model
  }

  public async findAll() {
    return await this.Model.all()
  }

  public async findOne(id) {
    return await this.Model.find(id)
  }

  public async create(params) {
    return await this.Model.create(params)
  }

  public async update({ payload, id }) {
    const user = await this.Model.find(id)
    if (!user) return
    await user.merge({ ...payload })
    user?.save()
    return user
  }

  public async delete(id) {
    ;(await this.Model.findOrFail(id)).delete()
  }

  private async query(query) {
    return await this.Model.query().where(query)
  }

  private fail({ code, message }) {
    console.log('failed', code, message)
    return { fail: true, code, message }
  }
}
