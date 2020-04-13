import React from 'react';

import PropTypes from 'prop-types';
import styles from './CarSelect.module.css';
import { carsStab } from './../../constatnts';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const CarSelect = ({
  setCar,
  selectedCarName,
  selectedCarUrl,
  setIsShowOptions,
  isShowOptions
}) => {
  const handleClick = (e, selectedId) => {
    setCar(selectedId);
    setIsShowOptions(false);
  };

  return (
    <div
      tabIndex="2"
      className={styles.carWrap}
      onFocus={() => setIsShowOptions(true)}
      onBlur={() => setIsShowOptions(false)}>
      <div
        className={selectedCarName ? '' : styles.placeholderValue}
        onClick={() => setIsShowOptions(true)}>
        <img
          alt="img"
          className={styles.avatar}
          src={
            selectedCarUrl ||
            'https://pngimage.net/wp-content/uploads/2018/05/default-avatar-png-9.png'
          }
        />
        {selectedCarName || 'Car title'}
        {isShowOptions ? (
          <FaCaretUp className={styles.arrow} />
        ) : (
          <FaCaretDown className={styles.arrow} />
        )}
      </div>
      <span className={isShowOptions ? styles.optionsBox : styles.hideOptionsBox}>
        <div>All Users</div>
        {carsStab.map((car) => (
          <div key={car.id} onClick={(e) => handleClick(e, car.id)}>
            <img alt="img" className={styles.avatar} src={car.avatarUrl} />
            {car.name}
          </div>
        ))}
      </span>
    </div>
  );
};

export default CarSelect;

CarSelect.propTypes = {
  setCar: PropTypes.func,
  selectedCarName: PropTypes.func,
  selectedCarUrl: PropTypes.string,
  setIsShowOptions: PropTypes.func,
  isShowOptions: PropTypes.bool
};
