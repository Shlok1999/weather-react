import React, { Component } from "react";
import 'bootstrap'
import axios from "axios";


export default class UserHome extends Component {
    constructor() {
        super()

        this.state = {
            datas: []
        }
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/user/getData')
        let data = res.data

        this.setState({
            datas: [...data]
        })
    }

    render() {
        // let data = this.state.datas
        // console.log(data)
        return (
            <div>
                {
                    this.state.datas.length == 0 ?

                        <div>Data unavailiable</div> :
                        <table className="table">
                            <thead>
                                <tr>
                                <th>Date</th>
                                <th>Minimum Temperature</th>
                                <th>Maximum Temperature</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.state.datas.map((ele)=>{
                                        return (
                                            <tr key={ele._id}>
                                                <td>{ele.date}</td>
                                                <td>{ele.min_temp+"°C"}</td>
                                                <td>{ele.max_temp+"°C"}</td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>

                }
            </div>
        )


    }
}