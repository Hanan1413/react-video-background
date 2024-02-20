import React from 'react'
import styles from './Preloader.module.css'

function Preloader({isloading }) {
  return (
    <div className={`${isloading ? styles.preloader : styles.hidePreloader} `}>
      <img src="./preloader.gif" alt="preloader" />
    </div>
  )
}

export default Preloader
