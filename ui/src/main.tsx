import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CompetitionsPage from "./routes/competitions";
import ContactPage from "./routes/contact";
import ErrorPage from "./routes/error-page";
import LandingPage from "./routes/landing";
import WinnersPage from "./routes/winners";
import LoginPage from "./routes/login";

const PagesURL = {
  LANDING: "/",
  COMPETITIONS: "/competitions",
  WINNERS: "/winners",
  CONTACT: "/contact",
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
};

const router = createBrowserRouter([
  {
    path: PagesURL.LANDING,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.COMPETITIONS,
    element: <CompetitionsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.WINNERS,
    element: <WinnersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.CONTACT,
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
);
