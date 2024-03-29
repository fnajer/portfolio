import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from "../../actions/user";

const UserView = ({ setUsername }) => {
  return (
    <div>
      <h3>username</h3>
      <input onChange={setUsername} />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setUsername: event => dispatch(setUsername(event.target.value))
});

export default connect(
  null,
  mapDispatchToProps
)(UserView);