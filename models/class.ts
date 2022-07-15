import { Sequelize, DataType, Table, Column, Model , BelongsToMany } from 'sequelize-typescript'
import User from './user'
import StudentEnroll from './studentEnroll'
@Table({
  tableName:'Classes',
  timestamps: false
})
export default class Class extends Model{
  @Column({
    type: DataType.UUID,
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
  
  
  @BelongsToMany(() => User, () => StudentEnroll, 'classId')
  users?: User[]
}
