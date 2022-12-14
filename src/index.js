import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

//import { Provider, Client, defaultExchanges } from "urql";
import { Provider, Client, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

const cache = cacheExchange({});

const client = new Client({
  url: "http://localhost:4000",
  //exchanges: defaultExchanges,
  exchanges: [dedupExchange, cache, fetchExchange],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider value={client}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
