import React from 'react';
import { Day } from 'components/index';
import styles from './ListDays.module.scss';

const ListDays = () => {
  return (
    <div className={styles.container}>
      {new Array(7).fill(1).map(() => (
        <Day />
      ))}
    </div>
  );
};
export default ListDays;
