import React, { Component } from "react";
import 'bootstrap'
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegd from "./user.regd";
import axios from "axios";

export default class UserLogin extends Component {

    constructor(props){
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)

        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        const User = {
            email: this.state.email,
            password: this.state.password
        }

        // console.log(User)

        axios.post('http://localhost:4000/user/login', User)
        .then((res)=> console.log("You are now logged in!"))

        window.location="/user/getData"


        this.setState({
            email: "",
            password: ""
        })
    }

render() {
    return (
        <div>
            <form onSubmit = {this.onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input required value={this.state.email} onChange={this.onChangeEmail} id="email-login" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input required value={this.state.password} onChange={this.onChangePassword} id="pass-login" type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="mb-3 my-4 form-check">
                    <Link to="/user/signup">Not registered?</Link>
                </div>
            </form>


        </div>

    )
}
}