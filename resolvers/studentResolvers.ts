import Student from '../models/student'
import sequelize from 'sequelize'
const registerStudentResolver = async  (parent:any, args:any)  => {
    // const body:Body = req.body
    // console.log(body);
    
    const st = new Student({
        name: args.name, 
        email: args.email, 
        password: args.password,
    });
    try{ 
        await st.save()
        const accessToken = st.createAccessToken()   
        return {
            id: st.id,
            email: st.email,
            name: st.name, 
            accessToken
        }
    } catch(err){
        console.log(err);
        return {}
    }
}


const loginStudentResolver = async  (parent:any, args:any)  => {   
    const {email, password} = args
    console.log(password);
    if(!email || !password ){
        const error = new Error('Bad request')
        return {}
    }

    const st = await Student.findOne({ where: { email } })
    if(!st){
        const error = new Error('Please provide email and password')
        return {}
    }
    
    const isEqualPass = await st.comparePassword(password)
    console.log(isEqualPass);
    if(!isEqualPass){
        const error = new Error('Incorrect password provided')
        return {}
    }

    const accessToken = st.createAccessToken()
    const refreshToken = st.createRefreshToken()
    const record = await Student.update(
        {'refreshTokens': sequelize.fn('array_append', sequelize.col('refreshTokens'), refreshToken)},
        {'where': {'email': email}}
    );
    return {
        id:st.id,
        email: st.email,
        name: st.name,
        accessToken,
        refreshToken,
    }
}

const getAllStudent = async  ()  => {
    try{ 
        const students = await Student.findAll()
        console.log(students);
        const result = students.map(student => { 
            return {
                id: student.id,
                email: student.email,
                name: student.name
            }
        })
        return result
    } catch(err){
        console.log(err);
        return {}
    }
}
export { registerStudentResolver, loginStudentResolver, getAllStudent }