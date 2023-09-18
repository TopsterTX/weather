import React, { FC } from 'react';
import { FooterProps } from './Footer.types';
import styles from './Footer.module.scss';

const Footer: FC<FooterProps> = ({ children }) => {
  return <footer className={styles.footer}>{children}</footer>;
};

export default Footer;
