import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency, getLatestCourses, userInfo } from 'service/getUserInfo';

export const baseCurrencyThunk = createAsyncThunk('fetchBaseCurrency', async (crd, thunkAPI) => {
  const { baseName } = thunkAPI.getState();
  if (baseName) {
    return thunkAPI.rejectWithValue('We already have base currency');
  }

  try {
    const data = await userInfo(crd);

    return data.results[0].annotations.currency.iso_code;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const exchangeCurrencyThunk = createAsyncThunk(
  'exchangeCurrency',
  async (object, thunkAPI) => {
    try {
      const data = await exchangeCurrency(object);

      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const latestCoursesThunk = createAsyncThunk('latestCourses', async (baseName, thunkAPI) => {
  //   const { baseName } = await thunkAPI.getState();
  //   console.log(baseName);
  try {
    const data = await getLatestCourses(baseName);
    return data.rates;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
