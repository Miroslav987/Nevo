import React from "react";
import styles from "./OurServices.module.scss";
import OurSevicesAbout from "../components/OurSevicesAbout/OurSevicesAbout";
import ListServices from "../components/ListServices/ListServices";
import Cta from "../components/Cta/Cta";

const OurServices = () => {
  return (
    <div className={styles.ourServices}>
      <div className="container">
        <OurSevicesAbout />
        <ListServices />
        <Cta/>
      </div>
    </div>
  );
};

export default OurServices;
