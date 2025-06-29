import {configureStore} from '@reduxjs/toolkit';
import pesquisaSlice from './pesquisaSlice';

export const store = configureStore({
  reducer: {
    pesquisa: pesquisaSlice,
  },
});
