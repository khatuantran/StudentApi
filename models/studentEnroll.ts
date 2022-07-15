import { DataType, Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import User from './user'
import Class from './class'
@Table({
  tableName:'StudentEnrolls',
  timestamps: false
})
export default class StudentEnroll extends Model{
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    validate: {
        notEmpty: {
            msg: 'Student id not accept empty'
        }
    }
  })
  studentId!:string
  
  @ForeignKey(() => Class)
  @Column({
    primaryKey: true,
    type: DataType.UUIDV4,
    validate: {
        notEmpty: {
            msg: 'Class id not accept empty'
        }
    }
  })
  classId!: string
}
