import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import styles from './BuyerSelect.module.css';
import { buyersStab } from './../../constatnts';

const BuyerSelect = ({
  setBuyer,
  selectedBuyer,
  setIsShowOptions,
  isShowOptions,
  searchFilter,
  setSearchFilter
}) => {
  const searchInput = React.useRef();
  const handleFocus = () => {
    setIsShowOptions(true, () => searchInput.current.focus());
  };
  return (
    <div
      tabIndex="1"
      className={`${styles.buyerWrap} ${
        selectedBuyer ? '' : styles.placeholderValue
      } `}
      onFocus={handleFocus}
      onBlur={() => {
        setIsShowOptions(false);
      }}>
      {selectedBuyer || 'Select buyer'}
      {isShowOptions ? (
        <FaCaretUp className={styles.arrow} />
      ) : (
        <FaCaretDown className={styles.arrow} />
      )}
      <div className={isShowOptions ? styles.optionsBox : styles.hideOptionsBox}>
        <input
          type="text"
          ref={searchInput}
          value={searchFilter}
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
        />
        {buyersStab
          .filter((bueyr) => bueyr.name.indexOf(searchFilter) > -1)
          .map((bueyr) => (
            <div key={bueyr.id} onClick={() => setBuyer(bueyr.name)}>
              {bueyr.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BuyerSelect;

BuyerSelect.propTypes = {
  setBuyer: PropTypes.func,
  selectedBuyer: PropTypes.string,
  setIsShowOptions: PropTypes.func,
  isShowOptions: PropTypes.bool,
  searchFilter: PropTypes.string,
  setSearchFilter: PropTypes.func
};
