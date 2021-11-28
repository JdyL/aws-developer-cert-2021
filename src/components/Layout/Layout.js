import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
