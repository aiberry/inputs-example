import React from 'react'
import styles from './BuyerSelect.module.css'
import buyersStab from './buyersStab'

class BuyerSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      displayCarOptions: false,
      searchFilter: '',
      hoveredValue: '',
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.searchInput = React.createRef()
  }

  handleFocus(event) {
    this.setState({ ...this.state, displayCarOptions: true }, () =>
      this.searchInput.current.focus()
    )
  }

  handleBlur(event) {
    if (this.state.hoveredValue) {
      this.setState({
        ...this.state,
        value: this.state.hoveredValue,
        displayCarOptions: false,
        searchFilter: '',
      })
    } else {
      this.setState({ ...this.state, displayCarOptions: true })
    }
  }

  handleSearchChange(event) {
    this.setState({ ...this.state, searchFilter: event.target.value })
  }

  render() {
    return (
      <span className={styles.carWrap}>
        <input
          type="text"
          name="car"
          placeholder="Car Title"
          className={styles.carValue}
          value={this.state.value}
          onFocus={this.handleFocus}
          onChange={(e) => e.preventDefault()}
        />
        <span
          className={
            this.state.displayCarOptions ? styles.optionsBox : styles.hideOptionsBox
          }
        >
          <input
            type="text"
            ref={this.searchInput}
            value={this.state.searchFilter}
            onChange={this.handleSearchChange}
            onBlur={this.handleBlur}
          />
          {buyersStab
            .filter((bueyr) => bueyr.name.indexOf(this.state.searchFilter) > -1)
            .map((bueyr) => (
              <div
                key={bueyr.id}
                onMouseOver={(e) =>
                  this.setState({
                    ...this.state,
                    hoveredValue: bueyr.name,
                  })
                }
                onMouseLeave={(e) =>
                  this.setState({
                    ...this.state,
                    hoveredValue: '',
                  })
                }
              >
                {bueyr.name}
              </div>
            ))}
        </span>
      </span>
    )
  }
}

export default BuyerSelect
