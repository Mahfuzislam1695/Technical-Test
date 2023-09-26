import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";

function App() {
  return (
    <div className="font-gilroy text-[#0B181C]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
