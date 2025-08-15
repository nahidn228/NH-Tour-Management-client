import { Outlet } from "react-router";

import CommonLayout from "./components/layout/CommonLayout";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <CommonLayout>
      <Navbar />
      <Outlet />

      <Footer />
    </CommonLayout>
  );
}

export default App;
