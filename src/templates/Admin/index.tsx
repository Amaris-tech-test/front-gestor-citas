import { Header } from "../../molecules/Header";
import styles from "./Admin.module.scss";

import { Navbar } from "../../molecules/Navbar";
import React, { ReactNode } from "react";

interface AdminProps {
  content: ReactNode;
}

export const Admin: React.FC<AdminProps> = ({content}) => {

  return (
    <>
      <Header />
      <div className={styles.adminContainer}>
        <Navbar />
        <section className={styles.contentContainer}>
          {content}
        </section>
      </div>
    </>
  );
};
