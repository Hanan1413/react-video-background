import React from 'react'
import styles from './Video.module.css'; // Import CSS module
import Button from './Button';
function Video({videoref}) {
  return (
    <div className={styles.main}>
        <video className={styles.container}  muted autoPlay loop ref={videoref}>
            <source src='./ocean.mp4' type='video/mp4'/>
        </video>

        <h1>Weclome to my website</h1>

    </div>
  )
}

export default Video
