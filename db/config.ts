import 'dotenv/config'
import { Sequelize } from 'sequelize-typescript'


// const sequelize = new Sequelize( connectionString1 , {
//   dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
// })
const sequelize = new Sequelize('StudentApi', 'postgres', '01684748451Aa', {
  host: 'localhost',
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
