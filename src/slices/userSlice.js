import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import res from 'express/lib/response';

//make HTTP post req to login user
//thunk api takes care of errors
export const userLogin = createAsyncThunk('loginuser', async(userCredentialObj, thunkApi) =>{
    let response = await axios.post('/user-api/login', userCredentialObj)
    let data = response.data;
    let msg = response.data.message;
    if(msg === 'login success'){
        //store token in local storage
        localStorage.setItem("token", data.payload);
        return data.userObj;
    }
    if(msg === 'Invalid user' || msg === 'Invalid password'){
        return thunkApi.rejectWithValue(data);
    }
})

let userSlice = createSlice({
    name: 'user',
    initialState: {
        userObj:{},
        isError: false,
        isSuccess: false,
        isLoading:false,
        errMsg: ''
    },
    reducers: {
        clearLoginStatus:(state)=>{
            state.isSuccess=false;
            state.userObj={};
            state.isError=false;
            state.errMsg='';
            return state;
        }
    },
    extraReducers: {
        //track life cycle of promise returned by createAsyncThunk function
        [userLogin.pending]: (state, action) => {
            state.isLoading = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.userObj = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.errMsg="";
        },
        [userLogin.rejected]:(state, action) => {
            state.userObj = {};
            state.isError= true;
            state.isLoading = false;
            state.isSuccess = false;
            state.errMsg= action.payload.message;
        }
    }
})

//export action creaters
// eslint-disable-next-line no-empty-pattern
export const {clearLoginStatus} = userSlice.actions;
//export reducer
export default userSlice.reducer;