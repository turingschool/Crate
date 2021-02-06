//Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//UI Imports
import Input from "../../ui/input/Input";
import Button from "../../ui/button";
import { Grid, GridCell } from '../../ui/grid'
import Textarea from "../../ui/input/Textarea"
import Select from "../../ui/input/Select"

//App Imports
import userRoutes from "../../setup/routes/user";
import { logout } from "./api/actions";

class EditProfile extends Component {
  constructor() {
    super()
    this.state={
      image: '',
      name: '',
      email: '',
      bio: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    } 
  }

  updateInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Grid alignCenter={true} style={{ padding: "1em" }}>
        <GridCell style={{ textAlign: "center" }}>
          <form onSubmit={this.onSubmit}>
            <h2>Edit your profile</h2>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="image">Profile Picture</label>
              <Textarea
                label="picture"
                type="text"
                fullWidth={true}
                placeholder="Image URL"
                name="image"
                autocomplete="off"
                value={this.state.image}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="name">Your Name</label>
              <Input
                label="Name"
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Full Name"
                name="name"
                autocomplete="off"
                value={this.state.name}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="email">Your Email</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Email Address"
                name="email"
                autocomplete="off"
                value={this.state.email}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="bio">Your Bio</label>
              <Textarea
                type="text"
                fullWidth={true}
                placeholder="Describe Yourself"
                name="bio"
                autocomplete="off"
                value={this.state.bio}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="street1">Your Street</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder=""
                name="Street Address"
                autocomplete="off"
                value={this.state.street1}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="street2">Address Line 2</label>
              <Input
                type="text"
                fullWidth={true}
                placeholder="Optional"
                name="street2"
                autocomplete="off"
                value={this.state.street2}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="city">City</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Your City"
                name="city"
                autocomplete="off"
                value={this.state.city}
                onChange={this.updateInput}
              />
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="state">State</label>
              <Select
                type="text"
                fullWidth={true}
                required="required"
                name="state"
                value={this.state.state}
                onChange={this.updateInput}
              >
                <option value="">Select a state</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Select>
            </GridCell>
            <GridCell style={{ textAlign: "left" }}>
              <label htmlFor="zip">Zip Code</label>
              <Input
                type="text"
                fullWidth={true}
                required="required"
                placeholder="Your Zip"
                name="zip"
                autocomplete="off"
                value={this.state.zip}
                onChange={this.updateInput}
              />
            </GridCell>
            <Button theme="primary">Save</Button>
          </form>
        </GridCell>
      </Grid>
    );
    }
};

function profileState(state) {
  return {
    user: state.user,
  };
}

export default EditProfile
// export default connect(profileState, { logout })(EditProfile);
