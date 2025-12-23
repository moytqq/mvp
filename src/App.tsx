import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { servicesSlice } from './store/reducers/ServicesSlice';

const App = () => {

  const { services } = useAppSelector(state => state.servicesReducer);
  const { increment } = servicesSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <div>
      {services.map((service) => (<h1 key={service.id}>{service.name}</h1>))}
      <button onClick={()=> dispatch(increment(10))}>increment</button>
    </div>
  );
};

export default App;