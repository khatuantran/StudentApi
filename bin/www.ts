import 'dotenv/config'
import app from '../app'
import sequelize from '../db/config'

import Student from '../models/student'
const PORT = process.env.PORT || 3000
const connectDbAndStart:Function = async () => {
    try {
        await sequelize.authenticate()

        app.listen(PORT, async () => {
            console.log(`Listening on port ${PORT}`);
        })


    } catch (err) {
        console.log('Cannot connect to database')
    }
} 

connectDbAndStart()