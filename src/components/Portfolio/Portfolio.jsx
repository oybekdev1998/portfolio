import React from 'react';
import Navbar from '../Navbar/Navbar';
import { portfolioData } from '../../helpers/portfolio';

import styles from './Portfolio.module.css';

function Portfolio() {
  return (
    <>
      <Navbar />
      <div className={styles.portfolio}>
        <div className={styles.container}>
          {
            portfolioData.map((item, id) => {
              return (
                <div key={id} className={styles.item}>
                  <div>
                    <img className={styles.img} src={item.cardImgUrl} alt='cardImg' />
                  </div>
                  <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <h1 className={styles.stack}>Stack</h1>
                    <div className={styles.stackItem}>
                      {
                        item.stackItem.map((item) => {
                          return (
                            <span key={item}>{item}</span>
                          );
                        })
                      }
                    </div>
                  </div>
                  <div className={styles.btnGroup}>
                    <a href={item.githubUrl} className={styles.btn}>Wiew github</a>
                    <a href={item.demoUrl} className={styles.btn}>Wiew demo</a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

    </>
  );
}

export default Portfolio;
