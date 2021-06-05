import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { MessageService } from '../../services/message.services'

export default class MessagesController {
  private messageService = new MessageService()

  public async index({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    console.log(data)
    const messages = this.messageService.findAll()
    return messages
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['content', 'userId'])
    console.log(data)
    const newMessage = await this.messageService.create(data)
    return { newMessage }
  }

  /*
  public async store ({request, response}: HttpContextContract) {
  }

  public async show ({request, response}: HttpContextContract) {
  }

  public async edit ({request, response}: HttpContextContract) {
  }

  public async update ({request, response}: HttpContextContract) {
  }

  public async destroy ({request, response}: HttpContextContract) {
  */
}
