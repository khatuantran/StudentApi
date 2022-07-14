import { DataType, Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import User from './user'
import Class from './class'
@Table({
  tableName:'StudentEnrolls',
  timestamps: false
})
export default class StudentEnroll extends Model{
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    validate: {
        isEmpty: {
            msg: 'Student id not accept empty'
        }
    }
  })
  @ForeignKey(() => User)
  studentId?:string
 
  @Column({
    primaryKey: true,
    type: DataType.UUIDV4,
    validate: {
        isEmpty: {
            msg: 'Class id not accept empty'
        }
    }
  })
  @ForeignKey(() => Class)
  classId!: string
}
