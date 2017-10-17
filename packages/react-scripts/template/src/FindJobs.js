/**
 * Created by janet.bogle on 10/9/17.
 */
import React from 'react';
import ShowJobs from './ShowJobs';
import JobsData from './JobsData';

class FindJobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      showButton: true,
      showDropDown: false,
    };

    this.jobSearchHandler = this.jobSearchHandler.bind(this);
  }

  jobSearchHandler() {
    JobsData.fetchJobs('testing', data => {
      this.setState({ jobs: data });
    });
    alert('line after fetchJobs. jobs: ' + this.state.jobs);

    this.setState({
      showDropDown: true,
      showButton: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.showButton && (
          <button onClick={this.jobSearchHandler}>Find Jobs</button>
        )}
        {this.state.showDropDown && <ShowJobs jobsProp={this.state.jobs} />}
      </div>
    );
  }
}

export default FindJobs;
