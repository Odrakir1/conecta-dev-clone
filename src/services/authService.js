import Axios from '../utils/axios';

class AuthService{

    signIn({email,password}){
        return new Promise((resolve,reject)=>{
            Axios.post('/api/login',{email,password})
            .then(response => {
                if(response.data.user){
                    resolve(response.data.user)
                }
                else{
                    reject(response.data.error)
                }

            }).catch(err =>{
                reject(err)
            })
        })
    }

}


const authService = new AuthService();

export default authService;