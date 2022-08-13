import React from 'react'
import photo from '../../assets/wolf.svg'
import Social from '../Social/Social'
import Example from '../Typical/Typical'

import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <img className={styles.img} src={photo} alt="my" />
      <h1 className={styles.title}>Oybek Shamuratov</h1>
      <h2 className={styles.job}>React Developer</h2>
      <h3 className={styles.subTitle}>
        Working with technologies such as
        <span className={styles.skills}>
          <Example />
        </span>
      </h3>
      <Social />
    </div>
  )
}

export default Home
