/**
 * Created by janet.bogle on 10/11/17.
 */
import React from 'react';

class ShowJobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.jobsProp[0],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ selected: event.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.selected} onChange={this.handleClick}>
          {this.props.jobsProp.map((option, key) => {
            return <option key={key}>{option}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default ShowJobs;
