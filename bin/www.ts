import 'dotenv/config'
import app from '../app'
import sequelize from '../db/config'

const PORT = process.env.PORT || 3000
const connectDbAndStart:Function = async (retries = 5) => {
    while (retries) {
        try {
            await sequelize.authenticate()
            app.listen(PORT, async () => {
                console.log(`Listening on port ${PORT}`);
            })
            break;
        } catch (err) {
            console.log(err);
            retries -= 1;
            console.log(`retries left: ${retries}`);
            // wait 5 seconds
            await new Promise(res => setTimeout(res, 2000));
        }
    }
    // try {
    //     await sequelize.authenticate()

    //     app.listen(PORT, async () => {
    //         console.log(`Listening on port ${PORT}`);
    //     })


    // } catch (err) {
    //     console.log('Cannot connect to database')
    // }
} 

connectDbAndStart()