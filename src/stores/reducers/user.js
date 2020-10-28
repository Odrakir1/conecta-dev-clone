const INITIAL_STATE = {
    user:{}
}

const user = (state = INITIAL_STATE,action)=>{
    
    if(action.type === 'LOGIN_SUCCESS'){
        return {
            ...state,
            user: action.payload.user
        }
    }
    
    return state
}

export default user;