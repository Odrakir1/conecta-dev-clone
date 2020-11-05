import Mock from '../utils/mock';

/* Mock.onPost('/api/login').reply(200,{
    'id':1,
    'username':'ricardo_',
    'email': 'exemple@gmail.com'
})
 */

Mock.onPost('/api/login').reply((config)=>{
    
    
    const data = JSON.parse(config.data);
    

    if(data.email !== 'ricardo_@ricardo.com' || data.password !== 'qwerty123'){
        return [400,{response:"Credenciais não encontradas."}];
    }

    return [200,{user:{email:data.email,password:data.password}}];
});
