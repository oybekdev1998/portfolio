import React from 'react';
import Navbar from '../Navbar/Navbar';
import { skills } from '../../helpers/skills';

import styles from './Skills.module.css';

function Skills() {
  return (
    <div className={styles.skills}>
      <Navbar />
      <div className={styles.container}>
        {
          skills.map((skill) => {
            return (
              <div key={skill.id} className={styles.card}>
                <h1 className={styles.title}>{skill.skillName}</h1>
                <ul className={styles.items}>
                  {
                    skill.skillInfo.map((item) => <li key={item} className={styles.item}>{item}</li>)
                  }
                </ul>
              </div>
            );
          })
        }

      </div>
    </div>
  );
}

export default Skills;
