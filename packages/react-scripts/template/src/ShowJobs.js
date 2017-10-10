/**
 * Created by janet.bogle on 10/9/17.
 */
import React from 'react';
//import GetJobs from "./GetJobs";

class ShowJobs extends React.Component {
  constructor() {
    super();

    this.state = {
      jobs: [],
    };

    this.jobSearchHandler = this.jobSearchHandler.bind(this);
  }

  jobSearchHandler() {
    alert('in handleJobSearch');

    /*
        GetJobs.fetchJobs( jobs => {
            this.setState({
                jobs: jobs
            });
        });
*/
  }

  render() {
    return (
      <div>
        <button onClick={this.jobSearchHandler}>Find Jobs</button>
      </div>
    );
  }
}

export default ShowJobs;
