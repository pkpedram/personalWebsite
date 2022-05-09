import React, { useState } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';

//components


function App() {


  return (
    <Provider store={store}>
      
    </Provider >
  );
}

export default App;
