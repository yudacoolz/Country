// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./components/Layout/Layout";
import { CountryListPage } from "./pages/CountryListPage";
import ContributeCountryPage from "./pages/ContributeCountryPage";
import DetailCountryPage from "./pages/DetailCountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CountryListPage />,
      },

      {
        path: "/country/:nameCountry",
        element: <DetailCountryPage />,
      },
      {
        path: "/cooperate-country",
        element: <ContributeCountryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
