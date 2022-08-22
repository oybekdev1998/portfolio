import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import { portfolioData } from '../../helpers/portfolio';
import styles from './Portfolio.module.css'
const Portfolio = () => {
  
  return (
    <>
      <MainLayout />
      <div className={styles.portfolio}>
        <div className={styles.container}>
        {
          portfolioData.map((item, id) => {
            return (
              <div key={id} className={styles.item}>
                <h1 className={styles.title}>{item.title}</h1>
                <div>
                  <img className={styles.img} src={item.cardImgUrl} />
                </div>
                <div className={styles.btnGroup}>
                  <a href={item.githubUrl} className={styles.btn}>Wiew github</a >
                  <a href={item.demoUrl} className={styles.btn}>Wiew demo</a >
                </div>  
              </div>
            )
          })
        }
        </div>
      </div>
      
    </>
  )
}

export default Portfolio