import MockAdapter from 'axios-mock-adapter';
import Axios from './axios';
 
const Mock = new MockAdapter(Axios,{
    delayReponse:0
});

export default Mock;