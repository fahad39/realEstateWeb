import { Suspense, useState } from "react";
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ROUTE } from "./common/Routes";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/property/property";
import UserDetailContext from "./context/userDetailcontext";
import Booking from "./pages/Booking/Booking";
import Favourites from "./pages/Favourites/Favourites";

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path={ROUTE.home} element={<Website />} />
                <Route path={ROUTE.property}>
                  <Route index element={<Properties />} />
                  <Route path={ROUTE.propertyid} element={<Property />} />
                </Route>
                <Route path={ROUTE.booking} element={<Booking />} />
                <Route path={ROUTE.favourites} element={<Favourites />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initalIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
