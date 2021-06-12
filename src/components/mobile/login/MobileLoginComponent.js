import {
  LockClosedIcon,
  MailIcon,
  XIcon,
} from "@heroicons/react/solid";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Validators } from "../../utilities/Validator";
import InputFormComponent from "../formInput/InputFormComponent";
import LoginNav from "./LoginNav";

export default class MobileLoginComponent extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  showValues = () => {
    console.log(this.state.email);
  };
  render() {
    const { email, password } = this.state;
    console.log(this.state.password);
    return (
      <div
        className="bg-gray-50 h-screen mobile__login"
        data-testid="register_div"
      >
        <Helmet>
          <title>Login | Dozens Kenya</title>
        </Helmet>
        <LoginNav>
        <div>
            <XIcon className="h-5 text-gray-50" />
          </div>
          <p className=" text-gray-100 text-xl">Login</p>

        </LoginNav>
        <div className="p-3" style={{paddingTop:"5rem"}}>
          <div
            className="flex flex-col p-2 items-center justify-center content-center bg-white rounded-md "
            style={{ border: "solid #E0E0E0 1px" }}
          >
            <InputFormComponent
              type="email"
              placeholder="jorammanoah1@gmail.com"
              Icon={MailIcon}
              value={email}
              validators={[
                { check: Validators.email, message: "Invalid email" },
              ]}
              onChange={this.handleChange("email")}
            />
            <InputFormComponent
              type="password"
              placeholder="******************"
              Icon={LockClosedIcon}
              validators={[
                { check: Validators.required, message: "Pasword is required" },
              ]}
              onChange={this.handleChange("password")}
              value={password}
            />
            <div>
              <Link to="/register" className="text-sm text-gray-400">
                Don't have an account? Sign up
              </Link>
            </div>
            <button
              style={{ backgroundColor: "#47817F" }}
              onClick={this.showValues}
              className="block w-full mt-4 p-2 rounded-md focus:outline-none active:bg-blue-400"
            >
              <p className="text-white  text-xl">SignIn</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
