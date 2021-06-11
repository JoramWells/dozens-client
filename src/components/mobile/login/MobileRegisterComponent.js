import {
  LocationMarkerIcon,
  LockClosedIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/solid";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Validators } from "../../utilities/Validator";
import InputFormComponent from "../formInput/InputFormComponent";

export default class MobileRegisterComponent extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    location:"",
    password:""
  };
  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };
  // showValues = () => {
  //   console.log(this.state.email);
  // };
  render() {
    const { email, username, phone,location,password } = this.state;
    return (
      <div className="bg-gray-50 mobile__register" data-testid="register_div">
        <Helmet>
          <title>Register | Dozens Kenya</title>
        </Helmet>

        <nav className="flex flex-row items-center justify-around mb-2 top-0 bg-white p-2 shadow-lg">
          <div>
            <XIcon className="h-5 text-gray-500" />
          </div>
          <p className=" text-gray-700 text-xl">Create account</p>
        </nav>
        <div className="p-2">
          <div
            className="flex flex-col p-2 items-center justify-center content-center bg-white rounded-md "
            style={{ border: "solid #E0E0E0 1px" }}
          >
            <InputFormComponent
              type="text"
              placeholder="User name"
              value={username}
              Icon={UserIcon}
              validators={[
                {
                  check: Validators.required,
                  message: "Enter your name",
                },
              ]}
              onChange={this.handleChange("username")}
            />
            <InputFormComponent
              type="email"
              placeholder="Enter email"
              value={email}
              Icon={MailIcon}
              validators={[
                {
                  check: Validators.email,
                  message: "Enter valid email",
                },
              ]}
              onChange={this.handleChange("email")}
            />
            <InputFormComponent
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              Icon={PhoneIcon}
              validators={[
                {
                  check: Validators.required,
                  message: "Phone number is required",
                },
              ]}
              onChange={this.handleChange("phone")}
            />
            <InputFormComponent
              type="text"
              placeholder="Enter your location"
              value={location}
              Icon={LocationMarkerIcon}
              validators={[
                {
                  check: Validators.required,
                  message: "Location is required",
                },
              ]}
            
              onChange={this.handleChange("location")}
            />
            <InputFormComponent
              type="password"
              placeholder="Enter password"
              value={password}
              Icon={LockClosedIcon}
              validators={[
                { check: Validators.required, message: "Password is required" },
              ]}
              onChange={this.handleChange("password")}
            />

            <div>
              <Link to="/login" className="text-sm text-gray-400">
                Already have an account?Login
              </Link>
            </div>
            <button className="bg-blue-500 block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400">
              <p className="text-white font-semibold text-xl">SignIn</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
