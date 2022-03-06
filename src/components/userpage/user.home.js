import React, { Component } from "react";
import 'bootstrap'
import { Link } from "react-router-dom";
import axios from "axios";


const DataOfTemperature = props=>{
    <tr>
        <td>{props.tempdata.date}</td>
        <td>{props.tempdata.min_temp}</td>
        <td>{props.tempdata.max_temp}</td>
    </tr>
}

export default class UserHome extends Component {
    constructor(props){
        super();

        this.state={
            datas: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/user/getData')
        .then((res)=>{
            this.setState({
                datas: res.data
            })
        }).catch((err)=> console.log(err))
    }

    data_of_temp(){
        return this.state.datas.map(currData=>{
            <DataOfTemperature data = {currData} key={currData._id}/>
        })
    }
    render() {
        return (
            <div>
                <h1>Temperature Data</h1>
                <table className="table my-5">
                    <thead className="thead-light">
                        <tr>
                            <th>Date</th>
                            <th>Minimum Temp(C)</th>
                            <th>Maximum Temp(C)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.data_of_temp()}
                    </tbody>
                </table>
            </div>

        )
    }
}