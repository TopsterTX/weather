import React, { FC } from 'react';
import { HeaderProps } from './Header.types';
import styles from './Header.module.scss';

const Header: FC<HeaderProps> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
