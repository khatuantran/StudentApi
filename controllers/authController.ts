import express, { NextFunction } from "express"
import sequelize from 'sequelize';
import Student from "../models/student"
import { StatusCodes } from 'http-status-codes'
import 'express-async-errors';

const registerStudent = async (req: express.Request, res: express.Response, next:NextFunction) => {
    // const body:Body = req.body
    // console.log(body);
    const st = new Student({...req.body})
    await st.save()
    const accessToken = st.createAccessToken()   
    res.status(StatusCodes.CREATED).send({
        data:{
            name: st.name,
            email: st.email,
        },
        accessToken,
    })
}

const loginStudent = async (req: express.Request, res: express.Response, next: NextFunction) => {
    const {email, password} = req.body
    if(!email || !password ){
        const error = new Error('Bad request')
        return next(error)
    }

    const st = await Student.findOne({ where: { email } })
    if(!st){
        const error = new Error('Please provide email and password')
        return next(error)
    }
    
    const isEqualPass = await st.comparePassword(password)
    console.log(isEqualPass);
    if(!isEqualPass){
        const error = new Error('Incorrect password provided')
        return next(error)
    }

    const accessToken = st.createAccessToken()
    const refreshToken = st.createRefreshToken()
    const record = await Student.update(
        {'refreshTokens': sequelize.fn('array_append', sequelize.col('refreshTokens'), refreshToken)},
        {'where': {'email': email}}
    );
    res.status(200).send({
        data: {
            email: st.email,
            name: st.name,
        },
        accessToken,
        refreshToken,
    })

}

export { registerStudent, loginStudent }