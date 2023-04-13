import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet></Outlet>{/** this is where the child routes listed in app js will connect */}
      </main>
    </>
  );
}

export default RootLayout;
