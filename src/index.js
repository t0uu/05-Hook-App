import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import { CallbackHooks } from './06-memos/CallbackHooks';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { MemoHook } from './06-memos/MemoHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { Memorize } from './06-memos/Memorize';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import CounterApp from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter es un componente de nivel superior o Higher Order Components, no son más que simples componentes que venimos haciendo, solo con la diferencia que recibe otros componentes internamente. Para qué sirve? Sirve para proveer la información del padre hacia el hijo de manera más sencilla
  <BrowserRouter>
  <React.StrictMode>
    <MainApp/>
  </React.StrictMode>
  </BrowserRouter>
);