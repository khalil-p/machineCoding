import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorFallback from "./GlobalComponents/ErrorFallback";

const OtpInputPage = lazy(() => import("./Projects/OtpInput/Index"));

export const router = createBrowserRouter([
  {
    path: "/otp-input",
    element: <OtpInputPage />,
    errorElement: <ErrorFallback />,
  },
]);
