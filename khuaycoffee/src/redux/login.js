import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'login',
    initialState: {
      docId:"111",
      isLogin: false,
      name:"0",
      isAdmin: false,
      
    },
    reducers: {
      login: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        console.log("action",action);
        state.docId=action.payload.userID;
        state.isLogin = true;
        state.name=action.payload.name;
        state.isAdmin=action.payload.isAdmin;
        
        console.log("redux",state.docId);
      },
      logout: (state,action) => {
        state.docId="";
        state.isLogin = false
        state.name="0";
        state.isAdmin=false;
        
      }
    }
})
  
export const { login, logout } = counterSlice.actions

export const store = configureStore({
reducer: {
  login: counterSlice.reducer}
})
  