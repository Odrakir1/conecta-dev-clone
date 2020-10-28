import Axios from '../utils/axios';

class AuthService{

    signIn = ({email,password}) => {
        return new Promise((resolve,reject)=>{
            Axios.post('/api/login',{email,password})
            .then(response => {
                if(response.data.user){
                    resolve(response.data.user)
                    //this.setUser(JSON.stringify(response.data.user))
                    
                }
                else{
                    reject(response.data.error)
                }

            }).catch(err =>{
                console.log("erro",err)
                reject(err)
            })
        })
    }

    setUser = (user)=>{
        localStorage.setItem("user",user)
    }

    getUser = ()=>{
         const user = localStorage.getItem("user");
         return user;
    }

    isAuthenticated = ()=>{
        return !!this.getUser();
    }
}


const authService = new AuthService();

export default authService;