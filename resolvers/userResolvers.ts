import User from '../models/user'
import sequelize from 'sequelize'
import {GraphQLYogaError} from '@graphql-yoga/node'

const registerUserResolver = async  (parent:any, args:any)  => {
    // const body:Body = req.body
    // console.log(body);
    const role = ['student', 'teacher']
    if(args.role  && !role.includes(args.role)){
        return new GraphQLYogaError('Invalid role of user')
    }
    const st = new User({
        name: args.name, 
        email: args.email, 
        password: args.password,
        role: args.role || 'student',
        tokenCounter: 1
    });
    try{ 
        await st.save()
        const accessToken = st.createAccessToken()   
        return {
            id: st.id,
            email: st.email,
            name: st.name,
            role: st.role, 
            accessToken,
        }
    } catch(err:any){
        console.log(err);
        if(err.name == 'SequelizeUniqueConstraintError')
            return new GraphQLYogaError(`Duplicate email: ${st.email}`)
        return new GraphQLYogaError(err.message)
    }
}


const loginUserResolver = async  (parent:any, args:any)  => {   
    const {email, password} = args
    console.log(password);
    if(!email || !password ){
        return new GraphQLYogaError('Please provide email and password')
    }

    const st = await User.findOne({ where: { email } })
    if(!st){
        return new GraphQLYogaError('Incorrect email provided')
    }
    
    const isEqualPass = await st.comparePassword(password)
    console.log(isEqualPass);
    if(!isEqualPass){
        return new GraphQLYogaError('Incorrect password provided')
    }

    const accessToken = st.createAccessToken()
    const refreshToken = st.createRefreshToken()
    const record = await User.update(
        {'refreshTokens': sequelize.fn('array_append', sequelize.col('refreshTokens'), refreshToken)},
        {'where': {'email': email}}
    );
    return {
        id: st.id,
        email: st.email,
        name: st.name,
        role: st.role,
        accessToken,
        refreshToken,
    }
}



const getAllType = async  (role: string)  => {
    try{ 
        const users = role == undefined ? await User.findAll() : await User.findAll({ where: { role } })
        console.log(users);
        const result = users.map(student => { 
            return {
                id: student.id,
                email: student.email,
                name: student.name,
                role: student.role
            }
        })
        return result
    } catch(err:any){
        console.log(err);
        return new GraphQLYogaError(err.message ||'Something was wrong please try again')
    }
}

const changePasswordUserResolver = async (parent:any, args:any, ctx:any, info:any) => {
    console.log(args.user);
    const { oldPassword, newPassword } = args
    if(!oldPassword || !newPassword ){
        return new GraphQLYogaError('Please provide old and new password')
    }
    try {
        const user = await User.findOne({ where: { email: args.user.email } })
        if(!user){
            return new GraphQLYogaError('Incorrect email')
        }
        console.log(oldPassword);
        const isEqualPass =  await user.comparePassword(oldPassword)
        if(!isEqualPass) {
            return new GraphQLYogaError('Incorrect password')
        }
        user.password = newPassword
        user.tokenCounter = Number(user.tokenCounter) + Number(1)
        user.save()
        // const updated = await user.update(
        //     { password: newPassword},
        //     { where: { email: args.user.email } }
        // )
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        }
    } catch (err:any) {
        return new GraphQLYogaError(err.message || 'Something was wrong please try again')
    }
}


export { registerUserResolver, loginUserResolver, getAllType , changePasswordUserResolver}