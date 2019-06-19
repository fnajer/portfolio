import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news';
import fetchStates from "../../reducers/fetchStates";

class News extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const { fetchState, message, news } = this.props;
    if (fetchState === fetchStates.error)
      return (
        <div>
          <p>Please, try reloading the app. Ann error occurred.</p>
          <p>{message}</p>
        </div>
      );

    return (
      <div>
        <h2>The Latest Hacker News</h2>
        {
          news.map(item => {
            const { id, title, url, by, score, time } = item;
            return (
              <div key={id}>
                <h3><a href={url}>{title}</a></h3>
                <p>Upvotes: {score}</p>
                <p>{by} - {new Date(time).toLocaleTimeString()}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default connect(
  state => ({ 
    news: state.news.items,
    message: state.news.message,
    fetchState: state.news.fetchState 
  }),
  { fetchNews }
)(News);