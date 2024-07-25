// https://reactrouter.com/en/main/start/tutorial
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { exchangeRatesLoader } from "../api/exchangeRates/useExchangeRates";

const Test = () => {
  const loadedData = useLoaderData();

  console.log(loadedData);

  return <div>Test</div>;
};
const ErrorPage = () => <div>ErrorPage</div>;

// todo: loading data
// https://reactrouter.com/en/main/start/tutorial#loading-data
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    errorElement: <ErrorPage />,
    loader: async () => await exchangeRatesLoader(),
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
