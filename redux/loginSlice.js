import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  senha: '',
  error: '',
  loggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setSenha(state, action) {
      state.senha = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLogin(state, action) {
      state.loggedIn = true;
      state.email = action.payload.email;
      state.senha = action.payload.senha;
      state.error = '';
    },
    setLogout(state) {
      state.loggedIn = false;
      state.email = '';
      state.senha = '';
      state.error = '';
    },
  },
});

export const { setEmail, setSenha, setError, setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;