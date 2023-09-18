import React, { FC } from 'react';
import { BodyProps } from './Body.types';
import styles from './Body.module.scss';

const Body: FC<BodyProps> = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

export default Body;
