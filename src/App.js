import React from 'react';

import styles from './App.module.css';
import BuyerSelect from './components/BuyerSelect';
import CarSelect from './components/CarSelect';
import { carsStab } from './constatnts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyer: {
        displayOptions: false,
        current: '',
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
  setCurrentBuyer = (value) => {
    this.setState({
      buyer: {
        current: value,
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
    this.setState((state) => ({
      car: {
        ...state.car,
        currentName: selectedCar.name,
        currentAvatarUrl: selectedCar.avatarUrl
      }
    }));
  };

  render() {
    return (
      <form autoComplete="off" className={styles.mainForm}>
        <BuyerSelect
          setBuyer={this.setCurrentBuyer}
          selectedBuyer={this.state.buyer.current}
          setIsShowOptions={this.showBuyerOptions}
          isShowOptions={this.state.buyer.displayOptions}
          setSearchFilter={this.setBuyerSearchFilter}
          searchFilter={this.state.buyer.searchFilter}
        />
        <CarSelect
          setCar={this.setCurrentCar}
          selectedCarUrl={this.state.car.currentAvatarUrl}
          selectedCarName={this.state.car.currentName}
          setIsShowOptions={this.showCarOptions}
          isShowOptions={this.state.car.displayOptions}
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
