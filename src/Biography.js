import React from 'react';

const Biography = ({ show, toggleShow }) => {
  return (
    <React.Fragment>
      {show ? (
        <div>
          <p>I live in Lugansk, and code every day.</p>
          <p>My favorite language is Javascript, and I think React.js is awesome.</p>
          <p>Besides coding, I also love music and ramen.</p>
          <button onClick={toggleShow}>Show Less</button>
        </div>
      ) : (
        <div>
          <button onClick={toggleShow}>Read More</button>
        </div>
      )}
    </React.Fragment>
  )
}

export default Biography;
