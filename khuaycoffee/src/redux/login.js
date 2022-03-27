import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'login',
    initialState: {
      isLogin: false,
      name:"0"
    },
    reducers: {
      login: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.isLogin = true
        state.name=action.payload;
      },
      logout: state => {
        state.isLogin = false
        state.name="0";
      }
    }
})
  
export const { login, logout } = counterSlice.actions

export const store = configureStore({
reducer: {
  login: counterSlice.reducer}
})
  