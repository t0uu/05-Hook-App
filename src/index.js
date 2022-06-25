import React from 'react';
import ReactDOM from 'react-dom/client';
import { CallbackHooks } from './06-memos/CallbackHooks';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
import { MemoHook } from './06-memos/MemoHook';
import { Padre } from './07-tarea-memo/Padre';
// import { Memorize } from './06-memos/Memorize';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import CounterApp from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Padre/>
  </React.StrictMode>
);