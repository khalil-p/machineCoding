import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ErrorFallback from "./GlobalComponents/ErrorFallback";
// import NestedCkeckboxes from "./Projects/NeastedCheckboxes";

const OtpInputPage = lazy(() => import("./Projects/OtpInput/Index"));
const NestedCkeckboxes = lazy(() => import("./Projects/NeastedCheckboxes"));

export const router = createBrowserRouter([
  {
    path: "/otp-input",
    element: <OtpInputPage />,
    errorElement: <ErrorFallback />,
  },
  {
    path: "/nested-checkbox",
    element: <NestedCkeckboxes />,
    errorElement: <ErrorFallback />,
  },
]);
