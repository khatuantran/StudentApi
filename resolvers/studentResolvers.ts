import Student from '../models/student'
interface Body {
    name: string,
    email: string,
    password: string,
}
const registerStudentResolver = async  (parent:any, args:any)  => {
    // const body:Body = req.body
    // console.log(body);
    
    const st = new Student({
        name: args.name, 
        email: args.email, 
        password: args.password,
    });
    try{ 
        await st.save()
        const accessToken = st.createAccessToken()   
        return {
            email: st.email,
            name: st.name, 
            accessToken
        }
    } catch(err){
        console.log(err);
        return {}
    }
}

export { registerStudentResolver }