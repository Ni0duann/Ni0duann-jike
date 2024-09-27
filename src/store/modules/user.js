import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";


const userStore = createSlice({
    name:"user",
    //数据状态
    initialState: {
        token: localStorage.getItem('token_key') ||  ''
    },
    //同步修改方法
    reducers: {
        setToken (state,action) {
            state.token = action.payload
            //localstorage 备份
            localStorage.setItem('token_key',action.payload)
        }
    }
})


//解构actionCreate 
const {setToken} = userStore.actions

//获取redux函数

const userReducer = userStore.reducer

//异步方法 完成登录获token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        //发送异步请求
        const res = await request.post('/authorizations',loginForm)
        dispatch(setToken(res.data.token))
    }
}

export {setToken,fetchLogin}

export default userReducer