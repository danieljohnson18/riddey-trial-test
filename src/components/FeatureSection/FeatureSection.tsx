import React from "react";
import styles from "./featuresection.module.scss";
import CheckIcon from "../../assets/images/check.svg";

type FeatureSectionProps = {
  name: string;
  description: string;
};
const FeatureSection = ({ name, description }: FeatureSectionProps) => {
  return (
    <ul className={styles.feature}>
      <li className={styles.featureItem}>
        <img src={CheckIcon} alt={"check-icon"} />
        <h3>
          {name}
          <span>
            {" "}
            {"-"} {description}
          </span>
        </h3>
      </li>
    </ul>
  );
};

export default FeatureSection;
