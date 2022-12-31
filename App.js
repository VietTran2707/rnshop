import React from 'react';
import { Provider } from 'react-redux';
import MainStack from './src/routing/MainStack';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;

