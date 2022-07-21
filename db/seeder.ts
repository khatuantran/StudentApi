import sequelize  from './config'
import User from '../models/user'
import Class from '../models/class'
import StudentEnroll from '../models/studentEnroll'
sequelize.addModels([User, Class, StudentEnroll])
const userCreateDummyData = async (): Promise<User[]> => {
    return User.bulkCreate([
        {
            name: 'Kha Tran',
            email: 'khatretrau@gmail.com',
            password: 'dummy',
            role: 'student',
        },
        {
            name: 'Tu Tran',
            email: 'tudeptrai@gmail.com',
            password: 'dummy',
            role: 'teacher',
        },
        {
            name: 'An Ha',
            email: 'hadeptrai@gmail.com',
            password: 'dummy',
            role: 'teacher',
        },
        {
            name: 'Thai Nguyen',
            email: 'thaideptrai@gmail.com',
            password: 'dummy',
            role: 'student',
        },
    ], { validate: true , individualHooks: true})
}
const classCreateDummyData = async (): Promise<Class[]> => {
    return Class.bulkCreate([
        {
            name: 'Data structure and algorithms',
        },
        {
            name: 'Introduce to information technology',
        },
        {
            name: 'Introduce to machine learning',
        },
    ], { validate: true })
}

(async function() {
    try{
        const users = await userCreateDummyData()
        const classes = await classCreateDummyData()
        await StudentEnroll.bulkCreate([
            {
                studentId: users[0].id,
                classId: classes[0].id,
            },
            {
                studentId: users[1].id,
                classId: classes[0].id,
            },
            {
                studentId: users[1].id,
                classId: classes[2].id,
            },
        ], { validate: true })
        console.log("Migrate data successfully");
    } catch (err) { 
        console.log(err);
    }
})()