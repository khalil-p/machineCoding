import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={"loading..."}>
      <div className="bg-[#fff] min-h-screen">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
