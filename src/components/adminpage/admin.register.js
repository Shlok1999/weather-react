import React, { Component } from "react";
import 'bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";

export default class AdminRegd extends Component {
    constructor(props) {
        super(props)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this)

        this.state = {
            email: "",
            password: "",
            confirmPass: ""
        }
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onChangeConfirmPass(e) {
        this.setState({
            confirmPass: e.target.value
        })
    }

    async onSubmit(e) {
        e.preventDefault()
        const admin = {
            email: this.state.email,
            password: this.state.password,
            confirmPass: this.state.confirmPass
        }

        // console.log(admin)

        await axios.post('http://localhost:4000/admin/signup', admin)
            .then((res) => console.log(""))
            .catch(()=> alert("Invalid credentials"))

        this.setState({
            email: "",
            password: "",
            confirmPass: ""
        })

        window.location="/admin"
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input required value={this.state.email} onChange={this.onChangeEmail} id="email-regd" type="email"   />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" required  onChange={this.onChangePassword}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input required  onChange={this.onChangeConfirmPass}  type="password"  />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="mb-3 my-4 form-check">
                        <Link to="/admin">Already Registered?</Link>
                    </div>
                </form>


            </div>
        )
    }
}