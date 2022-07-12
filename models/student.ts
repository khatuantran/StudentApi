import { DataType, Table, Column, Model, BeforeUpdate, BeforeCreate } from 'sequelize-typescript'
import bcrypt from 'bcryptjs'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
@Table({
  tableName:'Students',
  timestamps: false
})
export default class Student extends Model{
  @Column({
    type: DataType.UUIDV4,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!:string 
  

  @Column({
    unique: true,
    allowNull: false,
    type: DataType.TEXT,
    validate: {
      notEmpty: {
        msg: 'Student name not accept empty'
      },
      notNull: {
        msg: 'Student name not accept null'
      }
    }
  })
  name!: string

  @Column({
    unique: true,
    allowNull: false,
    type: DataType.TEXT,
    validate: {
      isEmail: {
        msg: 'Type email not match'
      },
      notEmpty: {
        msg: 'Student email not accept empty'
      },
      notNull: {
        msg: 'Student email not accept null'
      }
    }
  })
  email!: string

  
  @Column({
    allowNull: false,
    type: DataType.TEXT,
    validate: {
      notEmpty: {
        msg: 'Student password not accept empty'
      },
      notNull: {
        msg: 'Student password not accept null'
      }
    }
  })
  password!: string
  
  @Column({
    allowNull: true,
    type: DataType.ARRAY(DataType.TEXT),
    validate: {
      notEmpty: {
        msg: 'Not allow empty refreshtoken'
      },
    }
  })
  refreshTokens?: string[]

  @BeforeUpdate
  @BeforeCreate
  static async hashPassword(instance: Student){
    const salt = await bcrypt.genSalt(10)
    instance.password = await bcrypt.hash(instance.password, salt)   
  }

  createAccessToken(){
    console.log('Create new access token');
    const data = {
      email: this.email,
      name: this.name
    }
    return jwt.sign({ data }, process.env.JWT_SECRET! ,  { expiresIn: process.env.ACCESS_LIFETIME })
  }

  createRefreshToken(){
    console.log('Create new refresh token');
    const data = {
      email: this.email,
      name: this.name
    }
    return jwt.sign({ data }, process.env.JWT_SECRET! ,  { expiresIn: process.env.REFRESH_LIFETIME })
  }

  async comparePassword(rawPassword: string){
    console.log('Compare password func');
    const isEqual = await bcrypt.compare(this.password, rawPassword)
    return isEqual
  }
}
