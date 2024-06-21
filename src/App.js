import React from 'react';
import { DispatcherProvider } from './dispatcher';
import { initialState, reducer } from './stores/reducer';
import DialogWidget from './components/widget';
import './App.css'; 

const App = () => {
  return (
    <DispatcherProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <h1>Summary Widget</h1>
        <DialogWidget />
      </div>
    </DispatcherProvider>
  );
};

export default App;
