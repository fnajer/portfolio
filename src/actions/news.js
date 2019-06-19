import { NEWS } from './types';

const fetchNewsSuccess = json => ({
  type: NEWS.FETCH_SUCCESS,
  items: json
});
const fetchNewsError = error => ({
  type: NEWS.FETCH_ERROR,
  message: error.message
});

export const fetchNews = () => dispatch => {
  fetch('http://localhost:2000/topstories')
    .then(response => {
      if (response.status !== 200)
        throw new Error("Unsuccessful request to wrapper of hackers service");
      return response.json();
    })
    .then(json => dispatch(fetchNewsSuccess(json)))
    .catch(err => dispatch(fetchNewsError(err)));
}