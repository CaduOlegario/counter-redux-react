import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import "./App.css";
import { createStore } from "redux";
import counterReducer from "./reducers/CounterReducer";
import { Provider } from "react-redux";

const App = () => {
  const store = createStore(counterReducer);

  return (
    <div className="app">
      <Provider store={store}>
        <Header></Header>
        <Counter></Counter>
      </Provider>
    </div>
  );
};

export default App;
