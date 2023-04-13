import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet></Outlet>{/** this is where the child routes listed in app js will connect */}
      </main>
    </>
  );
}

export default RootLayout;
