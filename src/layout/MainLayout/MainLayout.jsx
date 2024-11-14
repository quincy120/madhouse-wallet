import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";

// css
import styles from "./mainLayout.module.scss";

import Sidebar from "../../components/Header/sidebar/Sidebar";

const MainLayout = () => {
  const [sidebar, setSidebar] = useState();
  const location = useLocation();

  return (
    <>
      <div className={`${styles.mainLayout} d-flex align-items-start`}>
        {/* <Sidebar sidebar={sidebar} setSidebar={setSidebar} /> */}
        <main
          className={`${styles.MainBody} ms-auto MainBody position-relative w-100`}
        >
          <Header sidebar={sidebar} setSidebar={setSidebar} />
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default MainLayout;
