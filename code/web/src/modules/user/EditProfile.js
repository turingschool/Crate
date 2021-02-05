//Imports
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//App Imports
import userRoutes from "../../setup/routes/user";
import { logout } from "./api/actions";

const EditProfile = (props) => {
  return <h1>Edit Profile</h1>;
};

function profileState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileState, { logout })(EditProfile);
