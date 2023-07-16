import { createSlice } from '@reduxjs/toolkit';
import { baseCurrencyThunk } from './thunk';
import { exchangeCurrencyThunk } from './thunk';
import { latestCoursesThunk } from './thunk';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseName: '',
    exchangeCurrency: '',
    rates: {},
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseName = action.payload;
    },
  },
  extraReducers: {
    [baseCurrencyThunk.pending](state) {},
    [baseCurrencyThunk.fulfilled](state, action) {
      state.baseName = action.payload;
    },
    [baseCurrencyThunk.rejected](state, action) {},
    [exchangeCurrencyThunk.fulfilled](state, action) {
      state.exchangeCurrency = action.payload.toFixed(2);
    },
    [latestCoursesThunk.fulfilled](state, action) {
      state.rates = action.payload;
    },
  },
});

export const { setBaseCurrency } = currencySlice.actions;
export const { reducer: currencyReducer } = currencySlice;
