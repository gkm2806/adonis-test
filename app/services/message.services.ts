import Message from '../Models/Message'
import { ModelService } from './base.services'

export class MessageService extends ModelService {
  constructor() {
    super(Message)
  }

  public create(params) {
    const superCreate = super.create(params)
    console.log(superCreate)
    return superCreate
  }
}
