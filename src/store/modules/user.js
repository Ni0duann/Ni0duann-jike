import { removeToken, request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken } from "@/utils";

const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    token: getToken() || "",
    userInfo: {}
  },
  //同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      //localstorage 备份
      _setToken(action.payload);
    },
    setUserInfo(state,action) {
      state.userInfo = action.payload
    },
    cleraUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  },
});

//解构actionCreate
const { setToken,setUserInfo,cleraUserInfo } = userStore.actions;

//获取redux函数

const userReducer = userStore.reducer;

//异步方法 完成登录获token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //发送异步请求
    const res = await request.post("/authorizations", loginForm);
    dispatch(setToken(res.data.token));
  };
};

//异步方法获取个人信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('user/profile') 
    dispatch(setUserInfo(res.data))
  }
}


 
export { setToken, fetchLogin,fetchUserInfo,cleraUserInfo };

export default userReducer;
