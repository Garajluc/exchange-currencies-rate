import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { loader } from "../api/exchangeRates/ExchangeRatesService";
import ExchangeRatesView from "../components/page-specific/exchange-rates/ExchangeRatesView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ExchangeRatesView />,
    loader: loader,
    children: [
      {
        path: "*",
        loader: async () => redirect("/exchange-rates"),
      },
      {
        path: "/exchange-rates",
        element: <ExchangeRatesView />,
        loader: loader,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
