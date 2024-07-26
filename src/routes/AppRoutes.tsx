// https://reactrouter.com/en/main/start/tutorial
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { exchangeRatesLoader } from "../api/exchangeRates/useExchangeRates";

const Test = () => {
  const loadedData = useLoaderData();

  console.log(loadedData);

  return <div>Test</div>;
};

// https://reactrouter.com/en/main/start/tutorial#loading-data
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    children: [
      {
        path: "*",
        loader: async () => redirect("/home"),
      },
      {
        path: "/home",
        element: <Test />,
        loader: async () => await exchangeRatesLoader(),
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
