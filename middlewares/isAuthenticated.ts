import { rule } from 'graphql-shield'
import {GraphQLYogaError} from '@graphql-yoga/node'
import User from '../models/user'
import jwt from 'jsonwebtoken'

const isAuthenticated = rule()(async (parent, args, ctx, info) => {
    const token = ctx.request.headers.get('x-auth-token')?.split(' ')[1];
    if(!token){
        console.log('None header token');
        return new GraphQLYogaError('Missing x-auth-token header')
    } 
    try {
        const payload:any = jwt.verify(token, process.env.JWT_SECRET!);
        const user = await User.findOne({ where: { email:payload.data.email } })
        if(user && user.tokenCounter == 99999){
            await User.update({ tokenCounter: 1 },{ where: { email:payload.data.email } })
        }
        // console.log(payload.data.tokenCounter);
        // console.log(user!.tokenCounter);
        if(user && (payload.data.tokenCounter != user.tokenCounter)){
            return new GraphQLYogaError('Invalid token')
        }
        args.user = payload.data;
        return true
      } catch(err:any) {
        console.log(err)
        return new GraphQLYogaError('Invalid token')
    }  
})

export default isAuthenticated