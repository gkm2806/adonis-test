import User from '../Models/User'
import { ModelService } from './base.services'

export class UserService extends ModelService {
  constructor() {
    super(User)
  }
  public async findAll() {
    return await this.Model.query().preload('messages')
  }
}
