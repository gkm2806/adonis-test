import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserService } from '../../services/user.services'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    console.log(data)
    const users = new UserService().findAll()
    return users
  }

  public async create({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    console.log(data)

    return { data: 'Batata' }
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
