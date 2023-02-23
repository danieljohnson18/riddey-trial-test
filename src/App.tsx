import { useState } from "react";
import styles from "./app.module.scss";
import Badge from "./assets/images/badge.svg";
import Button from "./components/Button/Button";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { Features } from "./constants/features";

const App = () => {
  const [progressCount, setProgressCount] = useState<number>(0);

  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img src={Badge} alt="Badge" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>
          Upgrade to Riddey PRO and boost productivity!
        </h1>
        <h3 className={styles.subHeader}>
          Pellentesque porttitor euismod ante, accumsan consequat purus!
        </h3>
      </div>
      {Features.map((feature, index) => (
        <FeatureSection name={feature.name} description={feature.description} />
      ))}
      <div className={styles.bottomSection}>
        <h3>Current usage</h3>
        <h4>{progressCount} out of 10 boards in use</h4>
        <ProgressBar bgcolor="#E26559" progress={(progressCount / 10) * 100} />
      </div>
      <Button
        title="Add New Board"
        onClick={() => {
          setProgressCount((prevCount) => prevCount + 1);
        }}
        disabled={progressCount === 10}
      />
    </div>
  );
};

export default App;
