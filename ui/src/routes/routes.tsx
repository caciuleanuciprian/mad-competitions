import { createBrowserRouter } from "react-router-dom";
import CompetitionsPage from "./competitions";
import ContactPage from "./contact";
import ErrorPage from "./error-page";
import LandingPage from "./landing";
import LoginPage from "./login";
import WinnersPage from "./winners";
import { PagesURL } from "./consts";

export const router = createBrowserRouter([
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
