import React from "react";
import styles from "styles/layout.module.css";

import { Header } from "components/header";
import { Footer } from "components/footer";
import "styles/globalStyle.module.css";

export const SingleLayout: React.FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    <main className={styles.content}>{children}</main>
    <Footer />
  </div>
);
