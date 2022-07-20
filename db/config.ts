import 'dotenv/config'
import { Sequelize } from 'sequelize-typescript'


// const sequelize = new Sequelize( process.env.DB_CONNECTION_STRING || '', {
//   dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
// })


const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  // host: 'localhost',
  dialect: 'postgres'
});



sequelize.addModels([__dirname + '/../models'])
// const go = async () => {
//   try {
//     await sequelize.sync({force: true});
//   } catch (err) {
//     console.log(err);
//   }
// }
// go()

export default sequelize
