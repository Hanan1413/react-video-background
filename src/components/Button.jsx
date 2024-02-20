import React from "react";
import styles from "./Button.module.css";

function Button({ clicked, handleToggle, isPlaying }) {
  return (
    <div>
      {/* Video switch  */}
      <button
        className={`${styles.switchBtn} ${isPlaying ? styles.slide : ""}`}
        onClick={handleToggle}
      >
        <span> pause </span>

        <span> Play </span>
        <span className={styles.switch}> </span>
      </button>
    </div>
  );
}

export default Button;
