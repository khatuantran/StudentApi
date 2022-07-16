import Class from '../models/class'
import {GraphQLYogaError} from '@graphql-yoga/node'
const getAllClassResolver =  async (parent:any, args:any) => {
    try { 
        const classes = await Class.findAll()
        return classes
    } catch (err:any) {
        console.log(err);
        return new GraphQLYogaError(err.message)
    } 
}
const createClassResolver = async (parent:any, args:any) => {
    console.log(args);
    try {
        const newClass = await Class.create({name: args.name})
        return newClass
    } catch (error:any) {
        console.log(error);
        if(error.name == 'SequelizeUniqueConstraintError')
            return new GraphQLYogaError(`Duplicate class name: ${args.name}`)
        return new GraphQLYogaError(error.message || 'Something was wrong please try again')
    }
}

const editClassResolver = async (parent:any, args:any) => {
    try {
        const { name } = args
        const affected = await Class.update({ name }, { where: { id: args.id } })
        
        if(Number(affected.toString()) === 0){
            return new GraphQLYogaError("Can't find any class match this request")
        }
        return { }
    } catch (error:any) {
        console.log(error);
        if(error.name == 'SequelizeUniqueConstraintError')
            return new GraphQLYogaError(`Duplicate class name: ${ args.name }`)
        return new GraphQLYogaError(error.message || 'Something was wrong please try again')
    }
}

const deleteClassResolver = async (parent:any, args:any) => {
    try {
        const affected = await Class.destroy({ where: { id: args.id } })
        if(!affected){
            return new GraphQLYogaError("Can't find any class match this request")
        }
        return { }
    } catch (error:any) {
        console.log(error);
        return new GraphQLYogaError(error.message || 'Something was wrong please try again')
    }
}

const getUserByClassResolver = async (parent:any, args:any) => {
    try {
        const record:any = await Class.findOne({ where: { id: parent.id } })
        const userOfClass = await record.getUsers()
        // console.log(classOfUser);
        return userOfClass

    } catch (error:any) {
        console.log(error);
        return new GraphQLYogaError(error.message || 'Something was wrong please try again')
    }

}

export {
    createClassResolver,
    getAllClassResolver,
    editClassResolver,
    deleteClassResolver,
    getUserByClassResolver,
}
