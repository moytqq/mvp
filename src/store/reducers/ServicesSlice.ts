import { IServices } from '../../models/IServices';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServicesState {
  services: IServices[];
  isLoading: boolean;
  error: string;
}

const initialState: ServicesState = {
  services: [
    {
      id: 1,
      name: 'Service1',
      price: 999,
      description: 'Description1',
    }, {
      id: 2,
      name: 'Service2',
      price: 1999,
      description: 'Description2',
    }, {
      id: 3,
      name: 'Service3',
      price: 2999,
      description: 'Description3',
    }],
  isLoading: false,
  error: '',
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {

    },
  },
});

export default servicesSlice.reducer;