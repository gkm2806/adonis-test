import User from '../Models/User'
import { ModelService } from './base.services'

export class UserService extends ModelService {
  constructor() {
    super(User)
  }
}
