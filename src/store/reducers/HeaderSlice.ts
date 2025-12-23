import { IHeader } from '../../models/IHeader';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  header: IHeader;
}

const initialState: HeaderState = {
  header: { cardItemsCount: 0 },
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
  },
});

export default headerSlice.reducer;