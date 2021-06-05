import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ChatUsers extends BaseSchema {
  protected tableName = 'chat_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().references('users.id')
      table.integer('chat_id').unsigned().references('chats.id')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
