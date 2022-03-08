import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminHome extends Component {
    constructor(props){
        super(props)

        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeMinTemp = this.onChangeMinTemp.bind(this)
        this.onChangeMaxTemp = this.onChangeMaxTemp.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state={
            date: new Date().getDate()+'/' + (new Date().getMonth()+1)+'/' + new Date().getFullYear(),
            min_temp: '',
            max_temp: '',
        }
    }

   
    onChangeDate(){
        this.setState({
            date: new Date().getDate()+'/' + (new Date().getMonth()+1)+'/' + new Date().getFullYear(),
        })
    }
    onChangeMinTemp(e){
        this.setState({
            min_temp: e.target.value
        })
    }
    onChangeMaxTemp(e){
        this.setState({
            max_temp: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const temperData = {
            date: this.state.date,
            min_temp: this.state.min_temp,
            max_temp: this.state.max_temp
        }
        console.log(temperData)

        axios.post('http://localhost:4000/admin/addTempData', temperData)
        .then((res)=> console.log(res.data))

        alert("Tepeature data added, Check on user section")
        this.setState({
            min_temp: '',
            max_temp: ''
        })

    }


   




    render() {
        return (
            <div>
                <h1>Add Todays Temperature Data</h1>

                <div className="temperature-data" style={{marginTop: '50px', textAlign:'left', marginLeft: '30%', border: '0.5px solid black', width: '300px'}}>
                    <form onSubmit={this.onSubmit} style={{margin: '5px'}}>
                    
                        <div className="mb-3">
                            <label >Minimum Temperature</label><br/>
                            <input value={this.state.min_temp} onChange={this.onChangeMinTemp} required type="Number"   />
                        </div>
                        <div className="mb-3">
                            <label >Maximum Temperature</label><br/>
                            <input value={this.state.max_temp} onChange={this.onChangeMaxTemp} required type="Number"   />
                        </div>
                        <button type="submit" className="btn btn-primary">Add data</button>
                    </form>
                </div>
            </div>
        )
    }
}