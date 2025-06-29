import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import pesquisaReducer from './pesquisaSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    pesquisa: pesquisaReducer,
  },
});