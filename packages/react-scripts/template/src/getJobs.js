/**
 * Created by janet.bogle on 10/9/17.
 */
/*
function fetchJobs(cb) {
    alert('in fetchJobs function');

    return fetch(`/fetchJobs`, {
        accept: 'application/json',
    }).then(checkStatus);
    .then(parseJSON)
    .then(cb)
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
}

 function parseJSON(response) {
 return response.json();
 }

const GetJobs = { fetchJobs };
export default GetJobs;
*/
