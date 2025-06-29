import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nome: '',
  data: '',
  pesquisar: '',
};

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState,
  reducers: {
    setNome(state, action) {
      state.nome = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setPesquisar(state, action) {
      state.pesquisar = action.payload;
    },
    resetPesquisa(state) {
      state.nome = '';
      state.data = '';
      state.pesquisar = '';
    },
  },
});

export const { setNome, setData, setPesquisar, resetPesquisa } = pesquisaSlice.actions;
export default pesquisaSlice.reducer;