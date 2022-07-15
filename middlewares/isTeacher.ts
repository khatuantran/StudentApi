import { rule } from 'graphql-shield'
import {GraphQLYogaError} from '@graphql-yoga/node'

const isTeacher = rule()((parent, args, ctx, info) => {
    console.log(args.user);
    console.log(args);
    if(!args.user){
        return new GraphQLYogaError('Unauthorized user')
    }
    if(args.user.role != 'teacher'){
        return new GraphQLYogaError('Only teacher can do this action')
    }
    return true
})

export default isTeacher