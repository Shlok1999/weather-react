import React, { Component } from "react";
import 'bootstrap'
import axios from "axios";


// const DataOfTemperature = props=>{
//     <tr>
//         <td>{props.tempdata.date}</td>
//         <td>{props.tempdata.min_temp}</td>
//         <td>{props.tempdata.max_temp}</td>
//     </tr>
// }

export default class UserHome extends Component {



    
    constructor(props) {
        super();
        this.state = {
            temperData: []
        }
    }

    componentDidMount(e) {
        fetch('http://localhost:4000/user/getData')
        .then(res=> res.json())
        .then(temperData=>{
            this.setState({temperData: temperData})
        }).catch(err=> console.log(err))

    }


    displayData(){
        let datas = []
        this.state.temperData.map(element=>{
            datas.push(element)
        })
        
        return(
            datas.map((element)=>{
                <tr>
                    <td>{element.date}</td>
                    <td>{element.min_temp}</td>
                    <td>{element.max_temp}</td>
                </tr>
            })
        )
    }


    



    render() {
       
        return (
            <div>
                <h1>Temperature Data</h1>
                <div className="sort-by-date">

                </div>

                <table className="table my-5">
                    <thead className="thead-light">
                        <tr>
                            <th>Date</th>
                            <th>Minimum Temp(C)</th>
                            <th>Maximum Temp(C)</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.displayData()}
                    </tbody>
                </table>
            </div>

        )
    }
}