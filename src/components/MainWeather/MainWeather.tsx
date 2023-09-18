import React, { FC } from 'react';
import { ReactComponent as Sun } from 'assets/sun.svg';
import { MainWeatherProps } from './MainWeather.types';
import styles from './MainWeather.module.scss';

const MainWeather: FC<MainWeatherProps> = () => {
  return (
    <article className={styles['main-weather-container']}>
      <p className={styles.city}>Москва</p>
      <div className={styles['icon-container']}>
        <Sun className={styles.icon} />
        <span className={styles.degree}>4°</span>
      </div>
      <p>Солнечно</p>
    </article>
  );
};

export default MainWeather;
