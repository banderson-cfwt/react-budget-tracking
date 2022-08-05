import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId="a74ea097-ac46-4f44-90b6-141c61fa4620" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>, 
  document.getElementById('root')
);