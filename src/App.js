import React from 'react';

import styles from './App.module.css';
import Select from './components/Select';
import { carsStab, buyersStab } from './constatnts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyer: {
        displayOptions: false,
        currentName: '',
        searchFilter: ''
      },
      car: {
        displayOptions: false,
        currentName: '',
        currentAvatarUrl: ''
      }
    };
    this.showBuyerOptions = this.showBuyerOptions.bind(this);
    this.setCurrentBuyer = this.setCurrentBuyer.bind(this);
    this.setBuyerSearchFilter = this.setBuyerSearchFilter.bind(this);
    this.showCarOptions = this.showCarOptions.bind(this);
    this.setCurrentCar = this.setCurrentCar.bind(this);
  }

  showBuyerOptions = (isShow, callback) => {
    this.setState(
      (state) => ({
        buyer: {
          ...state.buyer,
          displayOptions: isShow
        }
      }),
      callback
    );
  };
  setCurrentBuyer = (selectedId) => {
    const selectedBuyer = buyersStab.find((buyer) => buyer.id === selectedId);
    this.setState({
      buyer: {
        currentName: selectedBuyer.name,
        displayOptions: false,
        searchFilter: ''
      }
    });
  };
  setBuyerSearchFilter = (filter) => {
    this.setState((state) => ({ buyer: { ...state.buyer, searchFilter: filter } }));
  };
  showCarOptions = (isShow) => {
    this.setState((state) => ({ car: { ...state.car, displayOptions: isShow } }));
  };
  setCurrentCar = (selectedId) => {
    const selectedCar = carsStab.find((car) => car.id === selectedId);
    this.setState({
      car: {
        currentName: selectedCar.name,
        currentAvatarUrl: selectedCar.avatarUrl,
        displayOptions: false
      }
    });
  };

  render() {
    const {
      setCurrentBuyer,
      showBuyerOptions,
      setBuyerSearchFilter,
      setCurrentCar,
      showCarOptions
    } = this;
    const { buyer, car } = this.state;

    return (
      <form autoComplete="off" className={styles.mainForm}>
        <Select
          {...buyer}
          options={buyersStab}
          setValue={setCurrentBuyer}
          setIsShowOptions={showBuyerOptions}
          setSearchFilter={setBuyerSearchFilter}
          tabIndex="1"
          placeholder="Select buyer"
        />
        <Select
          {...car}
          options={carsStab}
          setValue={setCurrentCar}
          setIsShowOptions={showCarOptions}
          tabIndex="2"
          placeholder="Car title"
        />
        <input type="text" name="text3" key="text3" placeholder="Text field" />
        <input type="text" name="text1" key="text1" placeholder="Text field" />
        <input type="text" name="text2" key="text2" placeholder="Text field" />
        <button className={styles.resetBtn} onClick={(e) => e.preventDefault()}>
          Reset
        </button>
        <button className={styles.filterBtn} onClick={(e) => e.preventDefault()}>
          Filter
        </button>
      </form>
    );
  }
}

export default App;
