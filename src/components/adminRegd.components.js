import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export default class AdminRegd extends Component {
    render() {
        return (
            <div className="userLogin">
                <h1>Admin Registration</h1>
                <form>
                    <div>
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div>
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div>
                        <label  className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" />
                    </div>
    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>
        )
    }
}