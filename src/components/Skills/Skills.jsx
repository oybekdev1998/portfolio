import React from 'react';
import { skills } from '../../helpers/skills';
import MainLayout from '../../layouts/MainLayout';

import styles from './Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.skills}>
      <MainLayout />
      <div className={styles.container}>
        {
          skills.map((skill) => {
            return (
              <div key={skill} className={styles.card}>
                <h1 className={styles.title}>{skill.skillName}</h1>
                <ul className={styles.items}>
                  {
                    skill.skillInfo.map((item) => {
                      return (
                        <li key={item} className={styles.item}>{item}</li>

                      )
                    })
                  }
                  
                </ul>
              </div>
            )
          })
        }
          
      </div>
    </div>
  )
}

export default Skills;