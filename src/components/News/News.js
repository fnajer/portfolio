import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news';

class News extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    const { message, news } = this.props;

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
    message: state.news.message 
  }),
  { fetchNews }
)(News);