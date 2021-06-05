import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserService } from '../../services/user.services'

export default class UsersController {
  private userService = new UserService()

  public async index({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    console.log(data)
    const users = this.userService.findAll()
    return users
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    console.log(data)
    const newUser = await this.userService.create(data)
    return { newUser }
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
