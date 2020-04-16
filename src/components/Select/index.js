import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import styles from './Select.module.css';

const Select = ({
  currentName,
  currentAvatarUrl,
  displayOptions,
  options,
  searchFilter = '',
  setValue,
  setIsShowOptions,
  setSearchFilter,
  placeholder,
  tabIndex
}) => {
  const searchInput = React.useRef();
  const handleFocus = () => {
    setIsShowOptions(true, () => searchInput.current.focus());
  };
  return (
    <div
      tabIndex={tabIndex}
      className={`${styles.selectWrap} ${
        !currentName ? styles.bluringPlaceholder : ''
      }`}
      onFocus={handleFocus}
      onBlur={() => {
        setIsShowOptions(false);
      }}>
      {currentAvatarUrl !== undefined ? (
        <img
          alt="img"
          className={styles.avatar}
          src={
            currentAvatarUrl ||
            'https://pngimage.net/wp-content/uploads/2018/05/default-avatar-png-9.png'
          }
        />
      ) : (
        ''
      )}
      {currentName || placeholder}
      <FaCaretUp
        className={displayOptions ? styles.showArrow : styles.hideElement}
      />
      <FaCaretDown
        className={displayOptions ? styles.hideElement : styles.showArrow}
      />
      <div className={displayOptions ? styles.showedOptions : styles.hideElement}>
        {setSearchFilter === undefined ? (
          <div>All Users</div>
        ) : (
          <input
            type="text"
            ref={searchInput}
            value={searchFilter}
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
          />
        )}
        {options
          .filter((option) => option.name.includes(searchFilter))
          .map((option) => (
            <div key={option.id} onClick={() => setValue(option.id)}>
              {option.avatarUrl ? (
                <img alt="img" className={styles.avatar} src={option.avatarUrl} />
              ) : (
                ''
              )}
              {option.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Select;

Select.propTypes = {
  setValue: PropTypes.func,
  selectedValue: PropTypes.string,
  setIsShowOptions: PropTypes.func,
  displayOptions: PropTypes.bool,
  searchFilter: PropTypes.string,
  currentName: PropTypes.string,
  placeholder: PropTypes.string,
  currentAvatarUrl: PropTypes.string,
  setSearchFilter: PropTypes.func,
  options: PropTypes.array,
  tabIndex: PropTypes.string
};
