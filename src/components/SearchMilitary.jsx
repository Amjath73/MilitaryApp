import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchMilitary = () => {
        const [data, setData] = useState(
        {
            "name": ""
        }
    )

    const [result, setResult] = useState([])

    const deleteMilitary = (id) => {
        let input = {"_id": id}
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch().finally()
    }

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/search", data).then(
            (response) => { setResult(response.data) }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()

    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info" onClick={readValue}>Search</button>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">studentId</th>
                                                <th scope="col">name</th>
                                                <th scope="col">dob</th>
                                                <th scope="col">address</th>
                                                <th scope="col">pincode</th>
                                                <th scope="col">state</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                result.map(
                                                    (value, index) => {
                                                        return <tr>
                                                            <th>{value.studentId}</th>
                                                            <td>{value.name}</td>
                                                            <td>{value.dob}</td>
                                                            <td>{value.address}</td>
                                                            <td>{value.pincode}</td>
                                                            <td>{value.state}</td>
                                                            <td><button className="btn btn-danger" onClick={()=>{deleteMilitary(value._id)}}>DELETE</button></td>
                                                        </tr>
                                                    }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchMilitary
