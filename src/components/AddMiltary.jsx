import axios from 'axios'
import React, { useState } from 'react'

const AddMiltary = () => {
    const [data, changeData] = useState(
        {
        "studentId":"",
        "name":"",
        "dob":"",
        "address":"",
        "pincode":"",
        "state":""
        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status = "success")
                {
                    alert("ADDED")
                }
            else
                {
                    alert("ERROR")
                }
        }
    ).catch(
        (error)=>{
            console.log(error)
            alert(error.message)
        }
    )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">studentId</label>
                                <input type="text" className="form-control" name='studentId' value={data.studentId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Dob</label>
                                <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">pincode</label>
                                <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">state</label>
                                <input type="text" className="form-control" name='state' value={data.state} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readvalue} >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddMiltary
