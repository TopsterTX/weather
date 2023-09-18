import React, { FC } from 'react';
import { LayoutProps } from './Layout.types';
import styles from './Layout.module.scss';

const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Layout;
