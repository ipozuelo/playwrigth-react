import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FirebaseAppProvider } from "reactfire";

import { firebaseConfig } from "./config/firebase.ts";
import {router} from './config/router.tsx'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <RouterProvider router={router} />
  </FirebaseAppProvider>
);
