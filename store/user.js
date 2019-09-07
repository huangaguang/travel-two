// state  代表数据
// mutation 同步修改state的数据
// actions  异步修改state的数据

export const state = () =>{
   return {
         userInfo:{
        token:'',
        user:{}
    }
   }
}

export const mutations = {
    // 设置用户信息,mutations 下的方法第一个参数固定是state
    setUserInfo(state , data){
        // data是后台返回的用户信息
        state.userInfo = data;
    }
};
