import { DataType, Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import Student from './student'
import Class from './class'
@Table({
  tableName:'Students',
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
  @ForeignKey(() => Student)
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
