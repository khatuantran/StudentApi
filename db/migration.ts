import sequelize from  './config'
const DropAllAndCreateNew = async () => {
    try{
        await sequelize.sync({force: true})
        console.log("Drop all and recreate all table success");
    } catch(err){
        console.log(err)
        console.log(err)
    }
}

if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV ){
    console.log(process.env.NODE_ENV);
    DropAllAndCreateNew()
} else {
    console.log(`Can't migrate data in ${process.env.NODE_ENV} environment`);
}