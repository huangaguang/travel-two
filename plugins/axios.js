import {Message} from 'element-ui';

export  default function ({$axios,redirect}){
    $axios.onError(err=>{
        const {statusCode,Message} = err.response.data;

        if(stateCode === 400 ){
            Message.warning({message});
        }
    })
}