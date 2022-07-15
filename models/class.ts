import { DataType, Table, Column, Model } from 'sequelize-typescript'

@Table({
  tableName:'Classes',
  timestamps: false
})
export default class Class extends Model{
  @Column({
    type: DataType.UUIDV4,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!:string
  @Column({
    allowNull: false,
    type: DataType.TEXT,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'class name not accept empty'
      },
      notNull: {
        msg: 'class name not accept empty'
      }
    }
  })
  name!: string
}
