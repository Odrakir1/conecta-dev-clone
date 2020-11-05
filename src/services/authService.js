import Axios from '../utils/axios';


class AuthService{

    signIn = (data) => {
        
        return new Promise((resolve,reject)=>{
            Axios.post('/api/login',JSON.stringify(data)/* ,{
                headers: {
                    'content-type': 'application/json',
               }
            } */)
            .then(response => {
                if(response.data.user){
                    resolve(response.data.user)
                    //this.setUser(JSON.stringify(response.data.user))
                    
                }
                else{
                    reject(response.data.error)
                }

            }).catch(err =>{
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