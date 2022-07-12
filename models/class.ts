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
    validate: {
      IsEmpty: {
        msg: 'class name not accept empty'
      },
      IsNull: {
        msg: 'class name not accept empty'
      }
    }
  })
  name!: string
}
