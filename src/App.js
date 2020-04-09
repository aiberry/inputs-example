import React from 'react';
import styles from './App.module.css';
import BuyerSelect from './components/BuyerSelect';

function App() {
  return (
    <div className={styles.wrap}>
      <form autoComplete="off">
        <BuyerSelect />
        <input
          className={styles.car}
          type="text"
          name="car"
          key="car"
          placeholder="Car Title"
        />
        <input
          type="text"
          name="text1"
          key="text1"
          placeholder="Text field"
          className={styles.text1}
        />
        <input
          type="text"
          name="text2"
          key="text2"
          placeholder="Text field"
          className={styles.text1}
        />
        <input
          type="text"
          name="text3"
          key="text3"
          placeholder="Text field"
          className={styles.text1}
        />
        <button className={styles.reset} onClick={(e) => e.preventDefault()}>
          Reset
        </button>
        <button className={styles.filter} onClick={(e) => e.preventDefault()}>
          Filter
        </button>
      </form>
    </div>
  );
}

export default App;
