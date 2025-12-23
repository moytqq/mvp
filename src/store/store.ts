import { combineReducers, configureStore } from '@reduxjs/toolkit';
import servicesReducer from './reducers/ServicesSlice';
import headerReducer from './reducers/HeaderSlice';
import cartReducer from './reducers/CartItemSlice';


const rootReducer = combineReducers({
  servicesReducer,
  headerReducer,
  cartReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']