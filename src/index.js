import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {version} from '../package.json';

Sentry.init({
  dsn: "https://df95d4b694844f27a76867494bbc5e92@o109264.ingest.sentry.io/5536710",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  release: `sentry-test@${version}`,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
