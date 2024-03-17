import { createBrowserRouter } from "react-router-dom";
import CompetitionsPage from "./competitions";
import ContactPage from "./contact";
import ErrorPage from "./error-page";
import LandingPage from "./landing";
import LoginPage from "./login";
import WinnersPage from "./winners";
import { PagesURL } from "./consts";
import CompetitionDetailsPage from "./competitionDetails";
import { TOSPage } from "./tos";
import { FAQsPage } from "./faqs";
import { PrivacyPolicyPage } from "./privacy";
import { PaymentSuccessPage } from "./payment-success";

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
    path: PagesURL.COMPETITION_DETAILS,
    element: <CompetitionDetailsPage />,
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
  {
    path: PagesURL.TOS,
    element: <TOSPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.FAQS,
    element: <FAQsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.PRIVACY,
    element: <PrivacyPolicyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: PagesURL.PAYMENT_SUCCESS,
    element: <PaymentSuccessPage />,
    errorElement: <ErrorPage />,
  },
]);
