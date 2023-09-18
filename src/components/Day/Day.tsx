import React from 'react';
import { ReactComponent as Sun } from 'assets/sun.svg';
import styles from './Day.module.scss';

const Day = () => {
  return (
    <article className={styles['day-container']}>
      <p>Сегодня</p>
      <Sun className={styles.icon} />
      <div className={styles['degree-container']}>
        <span>4°</span>
        <span>3°</span>
      </div>
    </article>
  );
};

export default Day;
