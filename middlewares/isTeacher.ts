import { rule } from 'graphql-shield'
import {GraphQLYogaError} from '@graphql-yoga/node'

const isTeacher = rule()((parent, args, ctx, info) => {
    if(!args.user){
        return false
    }
    if(args.user.role != 'teacher'){
        return false
    }
    return true
})

export default isTeacher